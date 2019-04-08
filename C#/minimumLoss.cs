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

        static long minimumLoss(long[] price, long n)
        {
            var MinArray = new Minimum[price.Length];

            for (var i = 0; i < price.Length; i++)
            {
                MinArray[i] = new Minimum
                {
                    Value = price[i],
                    Index = i
                };
            }

            MinArray = MinArray.OrderBy((a) => a.Value).ToArray();

            var currentMin = long.MaxValue;

            for (var i = 0; i < price.Length - 1; i++)
            {
                if (MinArray[i + 1].Value - MinArray[i].Value < currentMin
                    && MinArray[i].Index - MinArray[i + 1].Index < n
                    && MinArray[i + 1].Index < MinArray[i].Index)
                {
                    currentMin = MinArray[i + 1].Value - MinArray[i].Value;
                }
            }

            return currentMin;
        }


        static void Main(string[] args)
        {
            var Input = Convert.ToInt64(Console.ReadLine());

            long[] price = Array.ConvertAll(Console.ReadLine().Split(' '), priceTemp => Convert.ToInt64(priceTemp));

            var result = minimumLoss(price, Input);

            Console.WriteLine(result);

            //Console.WriteLine(KnightProblem(1, 1, Input));
        }
    }
}


