using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;


namespace Addition
{


    class Program
    {
        public class Minimum
        {
            public long Value { get; set; }
            public int Index { get; set; }
        }

        static int[] missingNumbers(int[] arr, int[] brr)
        {
            var CountingHashSort = new Dictionary<int, int>();

            for (var i = 0; i < brr.Length; i++)
            {
                var exists = CountingHashSort.TryGetValue(brr[i], out int count);

                if (exists)
                {
                    CountingHashSort.Remove(brr[i]);
                    CountingHashSort.Add(brr[i], count + 1);
                }
                else
                {
                    CountingHashSort.Add(brr[i], 1);
                }
            }

            for (var i = 0; i < arr.Length; i++)
            {
                var exists = CountingHashSort.TryGetValue(arr[i], out int count);
                if (exists)
                {
                    CountingHashSort.Remove(arr[i]);
                    if (count > 1)
                        CountingHashSort.Add(arr[i], count - 1);
                }
            }

            var remaningInts = CountingHashSort.Keys.ToArray().OrderBy(x => x).ToArray();

            return remaningInts;
        }


        static void Main(string[] args)
        {
            int n = Convert.ToInt32(Console.ReadLine());

            int[] arr = Array.ConvertAll(Console.ReadLine().Split(' '), arrTemp => Convert.ToInt32(arrTemp))
            ;
            int m = Convert.ToInt32(Console.ReadLine());

            int[] brr = Array.ConvertAll(Console.ReadLine().Split(' '), brrTemp => Convert.ToInt32(brrTemp))
            ;
            int[] result = missingNumbers(arr, brr);

            Console.WriteLine(string.Join(" ", result));

            //Console.WriteLine(KnightProblem(1, 1, Input));
        }
    }
}


