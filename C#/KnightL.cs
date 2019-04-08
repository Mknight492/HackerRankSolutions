using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;


namespace Addition
{


    class Program
    {
        public class Positon
        {
            public int A { get; set; }
            public int B { get; set; }
            public int Steps { get; set; }
            public List<Positon> Positons = new List<Positon>();

            public void CalulatePositions(int a, int b, int n)
            {
                //A First
                if (A - a >= 0 && B - b >= 0)
                {
                    Positons.Add(new Positon
                    {
                        A = A - a,
                        B = B - b,
                        Steps = Steps + 1
                    });
                }
                if (A - a >= 0 && B + b < n)
                {
                    Positons.Add(new Positon
                    {
                        A = A - a,
                        B = B + b,
                        Steps = Steps + 1
                    });
                }
                if (A + a < n && B - b >= 0)
                {
                    Positons.Add(new Positon
                    {
                        A = A + a,
                        B = B - b,
                        Steps = Steps + 1
                    });
                }
                if (A + a < n && B + b < n)
                {
                    Positons.Add(new Positon
                    {
                        A = A + a,
                        B = B + b,
                        Steps = Steps + 1
                    });
                }
                //B first
                if (A - b >= 0 && B - a >= 0)
                {
                    Positons.Add(new Positon
                    {
                        A = A - b,
                        B = B - a,
                        Steps = Steps + 1
                    });
                }
                if (A - b >= 0 && B + a < n)
                {
                    Positons.Add(new Positon
                    {
                        A = A - b,
                        B = B + a,
                        Steps = Steps + 1
                    });
                }
                if (A + b < n && B - a >= 0)
                {
                    Positons.Add(new Positon
                    {
                        A = A + b,
                        B = B - a,
                        Steps = Steps + 1
                    });
                }
                if (A + b < n && B + a < n)
                {
                    Positons.Add(new Positon
                    {
                        A = A + b,
                        B = B + a,
                        Steps = Steps + 1
                    });
                }
            }

        }



        public static int KnightProblem(int a, int b, int n)
        {

            var VisitedMatrix = new bool[n][];

            for (var i = 0; i < n; i++)
            {
                VisitedMatrix[i] = new bool[n];
            }

            var initalPosition = new Positon
            {
                A = 0,
                B = 0,
                Steps = 0,
            };

            VisitedMatrix[0][0] = true;

            var PositionsToProcess = new Queue<Positon>();

            PositionsToProcess.Enqueue(initalPosition);

            while (PositionsToProcess.Any())
            {
                var currentPosition = PositionsToProcess.Dequeue();
                currentPosition.CalulatePositions(a, b, n);
                var nextPositions = currentPosition.Positons;

                foreach (var nextPosition in nextPositions)
                {
                    if (nextPosition.A == n - 1 && nextPosition.B == n - 1) return nextPosition.Steps;
                    if (!VisitedMatrix[nextPosition.A][nextPosition.B])
                    {
                        PositionsToProcess.Enqueue(nextPosition);
                        VisitedMatrix[nextPosition.A][nextPosition.B] = true;
                    }
                }
            }
            return -1;


        }


        public static int[][] KnightProblemMatrix(int n)
        {
            var DistanceMatrix = new int[n - 1][];
            for (var i = 0; i < n - 1; i++)
            {
                DistanceMatrix[i] = new int[n - 1];
            }


            for (var i = 0; i < n - 1; i++)
            {
                for (var j = 0; j < n - 1; j++)
                {
                    DistanceMatrix[i][j] = KnightProblem(i + 1, j + 1, n);
                }
            }

            return DistanceMatrix;
        }


        static void Main(string[] args)
        {
            var Input = Convert.ToInt32(Console.ReadLine());

            var ResultMatrix = KnightProblemMatrix(Input);

            for (var i = 0; i < ResultMatrix.Length; i++)
            {
                Console.WriteLine(string.Join(" ", ResultMatrix[i]));
            }

            //Console.WriteLine(KnightProblem(1, 1, Input));
        }
    }
}


