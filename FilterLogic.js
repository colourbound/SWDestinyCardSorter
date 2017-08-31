
//perfect 30s
For eachCard in array {
    For nonElite {
        for eachCard {


        }
    }
}


//example from stack
This problem can be solved with a recursive combinations of all possible sums filtering out those that reach the target. Here is the algorithm in Python:

def subset_sum(numbers, target, partial=[]):
    s = sum(partial)

    # check if the partial sum is equals to target
    if s == target:
        print "sum(%s)=%s" % (partial, target)
    if s >= target:
        return  # if we reach the number why bother to continue

    for i in range(len(numbers)):
        n = numbers[i]
        remaining = numbers[i+1:]
        subset_sum(remaining, target, partial + [n])


if __name__ == "__main__":
    subset_sum([3,9,8,4,5,7,10],15)

    #Outputs:
    #sum([3, 8, 4])=15
    #sum([3, 5, 7])=15
    #sum([8, 7])=15
    #sum([5, 10])=15
This type of algorithms are very well explained in the following Standford's Abstract Programming lecture - this video is very recommendable to understand how recursion works to generate permutations of solutions.

Edit

The above as a generator function, making it a bit more useful. Requires Python 3.3+ because of yield from.

def subset_sum(numbers, target, partial=[], partial_sum=0):
    if partial_sum == target:
        yield partial
    if partial_sum >= target:
        return
    for i, n in enumerate(numbers):
        remaining = numbers[i + 1:]
        yield from subset_sum(remaining, target, partial + [n], partial_sum + n)
Here is the Java version of the same algorithm:

package tmp;

import java.util.ArrayList;
import java.util.Arrays;

class SumSet {
    static void sum_up_recursive(ArrayList<Integer> numbers, int target, ArrayList<Integer> partial) {
       int s = 0;
       for (int x: partial) s += x;
       if (s == target)
            System.out.println("sum("+Arrays.toString(partial.toArray())+")="+target);
       if (s >= target)
            return;
       for(int i=0;i<numbers.size();i++) {
             ArrayList<Integer> remaining = new ArrayList<Integer>();
             int n = numbers.get(i);
             for (int j=i+1; j<numbers.size();j++) remaining.add(numbers.get(j));
             ArrayList<Integer> partial_rec = new ArrayList<Integer>(partial);
             partial_rec.add(n);
             sum_up_recursive(remaining,target,partial_rec);
       }
    }
    static void sum_up(ArrayList<Integer> numbers, int target) {
        sum_up_recursive(numbers,target,new ArrayList<Integer>());
    }
    public static void main(String args[]) {
        Integer[] numbers = {3,9,8,4,5,7,10};
        int target = 15;
        sum_up(new ArrayList<Integer>(Arrays.asList(numbers)),target);
    }
}
It is exactly the same heuristic. My Java is a bit rusty but I think is easy to understand.

C# conversion of Java solution: (by @JeremyThompson)

public static void Main(string[] args)
{
    List<int> numbers = new List<int>() { 3, 9, 8, 4, 5, 7, 10 };
    int target = 15;
    sum_up(numbers, target);
}

private static void sum_up(List<int> numbers, int target)
{
    sum_up_recursive(numbers, target, new List<int>());
}

private static void sum_up_recursive(List<int> numbers, int target, List<int> partial)
{
    int s = 0;
    foreach (int x in partial) s += x;

    if (s == target)
        Console.WriteLine("sum(" + string.Join(",", partial.ToArray()) + ")=" + target);

    if (s >= target)
        return;

    for (int i = 0; i < numbers.Count; i++)
    {
        List<int> remaining = new List<int>();
        int n = numbers[i];
        for (int j = i + 1; j < numbers.Count; j++) remaining.Add(numbers[j]);

        List<int> partial_rec = new List<int>(partial);
        partial_rec.Add(n);
        sum_up_recursive(remaining, target, partial_rec);
    }
}
Ruby solution: (by @emaillenin)

def subset_sum(numbers, target, partial=[])
  s = partial.inject 0, :+
# check if the partial sum is equals to target

  puts "sum(#{partial})=#{target}" if s == target

  return if s >= target # if we reach the number why bother to continue

  (0..(numbers.length - 1)).each do |i|
    n = numbers[i]
    remaining = numbers.drop(i+1)
    subset_sum(remaining, target, partial + [n])
  end
end

subset_sum([3,9,8,4,5,7,10],15)
Edit: complexity discussion

As others mention this is an NP-hard problem. It can be solved in exponential time O(2^n), for instance for n=10 there will be 1024 possible solutions. If the targets you are trying to reach are in a low range then this algorithm works. So for instance:

subset_sum([1,2,3,4,5,6,7,8,9,10],100000) generates 1024 branches because the target never gets to filter out possible solutions.

On the other hand subset_sum([1,2,3,4,5,6,7,8,9,10],10) generates only 175 branches, because the target to reach 10 gets to filter out many combinations.

If N and Target are big numbers one should move into an approximate version of the solution.
