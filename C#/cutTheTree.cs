using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;


namespace Addition
{


    class Program
    {

        public class WeightedEdge
        {
            public long EndVertex { get; set; }
            public decimal weight { get; set; }
        }

        public class Graph
        {
            private long Verticies;
            private List<WeightedEdge>[] Adj;
            private List<int> SubTreeSums = new List<int>();
            private List<int> data;
            private int totalWeight;

            public Graph(long verticies)
            {
                Verticies = verticies;

                Adj = new List<WeightedEdge>[verticies];

                for (long i = 0; i < verticies; i++)
                {
                    Adj[i] = new List<WeightedEdge>();
                }
            }
            public void addData(List<int> Data)
            {
                data = Data;
                for (var i = 0; i < data.Count; i++)
                {
                    totalWeight += data[i];
                }
            }

            public void AddEdge(long source, WeightedEdge data)
            {
                if (!Adj[source].Contains(data))
                    Adj[source].Add(data);

                var reveresedEdge = new WeightedEdge
                {
                    weight = data.weight,
                    EndVertex = source
                };

                if (!Adj[data.EndVertex].Contains(reveresedEdge))
                    Adj[data.EndVertex].Add(reveresedEdge);
            }



            public int Explore(bool[] ExploredNodes, long currentNode)
            {
                var total = 0;
                ExploredNodes[currentNode] = true;
                var accessableNodes = Adj[currentNode];
                for (var i = 0; i < accessableNodes.Count; i++)
                {
                    if (!ExploredNodes[accessableNodes[i].EndVertex])
                    {
                        total += Explore(ExploredNodes, accessableNodes[i].EndVertex);
                    }
                }
                total += data[(int)currentNode];
                SubTreeSums.Add(Math.Abs(totalWeight - total * 2));
                return total;



            }

            public long cutTheTree()
            {
                var ExploredNodes = new bool[Verticies];

                var total = 0;

                var intialNodes = Adj[0];

                Explore(ExploredNodes, 0);

                return SubTreeSums.Min();
            }
        }





        public static void Main(string[] args)
        {
            //TextWriter textWriter = new StreamWriter(@System.Environment.GetEnvironmentVariable("OUTPUT_PATH"), true);

            int n = Convert.ToInt32(Console.ReadLine().Trim());

            List<int> data = Console.ReadLine().TrimEnd().Split(' ').ToList().Select(dataTemp => Convert.ToInt32(dataTemp)).ToList();

            List<List<int>> edges = new List<List<int>>();

            var GraphInst = new Graph(n);

            for (int i = 0; i < n - 1; i++)
            {
                var edgeData = Array.ConvertAll(Console.ReadLine().Split(' '), x => Convert.ToInt32(x));
                var newEdge = new WeightedEdge
                {
                    EndVertex = edgeData[1] - 1,
                    weight = data[edgeData[1] - 1]
                };
                GraphInst.AddEdge(edgeData[0] - 1, newEdge);
                //edges.Add(Console.ReadLine().TrimEnd().Split(' ').ToList().Select(edgesTemp => Convert.ToInt32(edgesTemp)).ToList());
            }
            GraphInst.addData(data);

            long result = GraphInst.cutTheTree();

            Console.WriteLine(result);
            //textWriter.WriteLine(result);

            //textWriter.Flush();
            //textWriter.Close();
        }

    }
}




