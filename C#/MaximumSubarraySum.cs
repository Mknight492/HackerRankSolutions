using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;


namespace Addition
{


    class Program
    {
        public class ValIndexPair
        {
            public long Value { get; set; }
            public int Index { get; set; }
        }

        static long maximumSum(long[] a, long m)
        {
            long cur = 0;

            var ModArrWithPrevIndex = new ValIndexPair[a.Length];

            ModArrWithPrevIndex[0] = new ValIndexPair
            {
                Value = a[0] % m,
                Index = 0
            };

            for (var i = 1; i < a.Length; i++)
            {
                ModArrWithPrevIndex[i] = new ValIndexPair
                {
                    Value = (ModArrWithPrevIndex[i - 1].Value + a[i]) % m,
                    Index = i
                };
            }

            ModArrWithPrevIndex = ModArrWithPrevIndex.OrderBy(x => x.Value).ToArray();


            var min = long.MaxValue;

            for (var i = 0; i < ModArrWithPrevIndex.Length - 1; i++)
            {
                if (ModArrWithPrevIndex[i].Index > ModArrWithPrevIndex[i + 1].Index)
                {
                    var nextMinDifference = ModArrWithPrevIndex[i + 1].Value - ModArrWithPrevIndex[i].Value;
                    min = (nextMinDifference < min) ? nextMinDifference : min;
                }

            }
            for (var i = 0; i < ModArrWithPrevIndex.Length; i++)
            {
                if (m - ModArrWithPrevIndex[i].Value < min) min = m - ModArrWithPrevIndex[i].Value;
            }
            return m - min;

        }

        static void Main(string[] args)
        {
            int q = Convert.ToInt32(Console.ReadLine());

            for (int qItr = 0; qItr < q; qItr++)
            {
                string[] nm = Console.ReadLine().Split(' ');

                int n = Convert.ToInt32(nm[0]);

                long m = Convert.ToInt64(nm[1]);

                long[] a = Array.ConvertAll(Console.ReadLine().Split(' '), aTemp => Convert.ToInt64(aTemp));

                long result = maximumSum(a, m);

                Console.WriteLine(result);
            }
        }
    }
}


