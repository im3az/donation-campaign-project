import {
  PieChart,
  Pie,
  Tooltip,
  Legend,
  Cell,
  ResponsiveContainer,
} from "recharts";

const Statistics = () => {
  const totalAvailableDonation = JSON.parse(
    localStorage.getItem("totalDonation")
  );

  const totalDonationGiven = JSON.parse(localStorage.getItem("donationGiven"));

  // console.log(totalAvailableDonation, totalDonationGiven);

  const donatedPercent = (totalDonationGiven / totalAvailableDonation) * 100;

  const total = 100 - donatedPercent;

  console.log(donatedPercent);
  console.log(total);

  const data = [
    { name: "Your donation", value: donatedPercent },
    { name: "Total Donation", value: total },
  ];

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  return (
    <ResponsiveContainer width="100%" height="100%">
      <div className="flex justify-center ">
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            cx={200}
            cy={175}
            labelLine={false}
            outerRadius={175}
            fill="#8884d8"
            dataKey="value"
            label={({
              cx,
              cy,
              midAngle,
              innerRadius,
              outerRadius,
              percent,
            }) => {
              const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
              const x = cx + radius * Math.cos(-midAngle * (Math.PI / 180));
              const y = cy + radius * Math.sin(-midAngle * (Math.PI / 180));

              return (
                <text
                  className="text-2xl"
                  x={x}
                  y={y}
                  fill="white"
                  textAnchor={x > cx ? "start" : "end"}
                  dominantBaseline="central"
                >
                  {`${(percent * 100).toFixed(0)}%`}
                </text>
              );
            }}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                wid
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </div>
    </ResponsiveContainer>
  );
};

export default Statistics;
