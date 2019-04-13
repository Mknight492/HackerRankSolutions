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
            public int I { get; set; }
            public int J { get; set; }
            public int Steps { get; set; }
            public List<Positon> Positons = new List<Positon>();

            public void CalculatePositions(int[][] explored, int[][] matrix)
            {
            //up
                if(I-1 >=0 && explored[I-1][J] == 0 && matrix[I-1][J] == 1)
                {
                    Positons.Add(new Positon
                    {
                        I = I - 1,
                        J = J
                    });
                }
                //down
                if (I + 1 < explored.Length && explored[I + 1][J] ==0 && matrix[I + 1][J] == 1)
                {
                    Positons.Add(new Positon
                    {
                        I = I + 1,
                        J = J
                    });
                }

                //left
                if (J - 1 >= 0 && explored[I][J-1] ==0 && matrix[I][J-1] == 1)
                {
                    Positons.Add(new Positon
                    {
                        I = I,
                        J = J-1
                    });
                }
                //right
                if (J+1 < explored[0].Length && explored[I][J+1]==0 && matrix[I][J+1] == 1)
                {
                    Positons.Add(new Positon
                    {
                        I = I,
                        J = J+1
                    });
                }
            //Up && Left
                if (I - 1 >= 0 && J-1>0 && explored[I - 1][J-1]==0 && matrix[I - 1][J-1] == 1)
                {
                    Positons.Add(new Positon
                    {
                        I = I - 1,
                        J = J-1
                    });
                }
            //Fown and Left
                if (I + 1 < matrix.Length && J - 1 >= 0 && explored[I + 1][J - 1] ==0 && matrix[I + 1][J - 1] == 1)
                {
                    Positons.Add(new Positon
                    {
                        I = I + 1,
                        J = J-1
                    });
                }
                //Up and Right
                if (I - 1 >= 0 && J + 1 < matrix[0].Length && explored[I - 1][J+ 1] == 0 && matrix[I - 1][J +1] == 1)
                {
                    Positons.Add(new Positon
                    {
                        I = I - 1,
                        J = J +1 
                    });
                }
                //right&down
                if (I + 1 < matrix.Length && J + 1 < matrix[0].Length && explored[I + 1][J + 1] ==0 && matrix[I + 1][J + 1] == 1)
                {
                    Positons.Add(new Positon
                    {
                        I = I + 1,
                        J = J + 1
                    });
                }
            }
         }


        public static long DFSSizeRecursive(Positon position, int[][] explored, int[][] matrix, long size)
        {

            if (explored[position.I][position.J] ==0)
            {
                size++;
                explored[position.I][position.J] = (int)size;
               
            }
            position.CalculatePositions(explored, matrix);
            var accessableNodes = position.Positons;
            if (!accessableNodes.Any())
            {
                return size;
            }


            for (var i = 0; i < accessableNodes.Count; i++)
            {
                    size= Math.Max(DFSSizeRecursive(accessableNodes[i], explored, matrix, size),size);
            }
            return size;
        }




        public static long DFSSize(int i, int j, int[][] explored, int[][] matrix)
        {

            var initalPosition = new Positon
            {
                I = i,
                J = j,          
            };

            var PositionsToProcess = new Stack<Positon>();

            PositionsToProcess.Push(initalPosition);

            long size = 1;
            explored[i][j] = 1;

            while (PositionsToProcess.Any())
            {
                var currentPosition = PositionsToProcess.Pop();
                currentPosition.CalculatePositions(explored, matrix);
                var nextPositions = currentPosition.Positons;

                foreach (var nextPosition in nextPositions)
                {
                    size = DFSSizeRecursive(nextPosition, explored, matrix, size);
                }
            }
            return size;


        }

        static long connectedCell(int[][] matrix)
        {
            var explored = new int[matrix.Length][];

            for (var i = 0; i < matrix.Length; i++)
            {
                explored[i] = new int[matrix[0].Length];
            }

            long MaxArea = 0;

            for (var i = 0; i< matrix.Length; i++)
            {
                for (var j = 0; j< matrix[0].Length; j++)
                {
                    if(explored[i][j] ==0 && matrix[i][j] == 1)
                    {
                        var Area = DFSSize(i, j, explored, matrix);
                        MaxArea = Math.Max(MaxArea, Area);
                    }                      
                }
            }

            return MaxArea;
        }
   


        static void Main(string[] args)
        {
            int n = Convert.ToInt32(Console.ReadLine());

            int m = Convert.ToInt32(Console.ReadLine());

            int[][] matrix = new int[n][];

            for (int i = 0; i < n; i++)
            {
                matrix[i] = Array.ConvertAll(Console.ReadLine().Split(' '), matrixTemp => Convert.ToInt32(matrixTemp));
            }

            long result = connectedCell(matrix);

            Console.WriteLine(result);
        }
    }
}


