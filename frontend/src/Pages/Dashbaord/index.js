import {
  DollarCircleOutlined,
  ShoppingCartOutlined,
  ShoppingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Card, Space, Statistic, Table, Typography } from "antd";
import { useEffect, useState } from "react";
import { getCustomers, getInventory, getOrders, getRevenue } from "../../API";


import {
  Chart as ChartJS,
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar, Pie } from "react-chartjs-2";


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

function Dashboard() {
  const [orders, setOrders] = useState(0);
  const [inventory, setInventory] = useState(0);
  const [customers, setCustomers] = useState(0);
  const [revenue, setRevenue] = useState(0);


  useEffect(() => {
    getOrders().then((res) => {
      setOrders(res.total);
      setRevenue(res.discountedTotal);
 
    });
    getInventory().then((res) => {
      setInventory(res.total);
    });
    getCustomers().then((res) => {
      setCustomers(res.total);
    });
  }, []);


  
  return (
    <Space size={10} direction="vertical">
    <Typography.Title level={4}>Dashboard</Typography.Title>
    <Space wrap>
      <DashboardCard
        icon={<ShoppingCartOutlined 
          style={{
            color: "green",
            backgroundColor: "rgba(0,255,0,0.25)",
            borderRadius: 20,
            fontSize: 24,
            padding: 8,
          }} />}
        title="Orders"
        value={orders}
        color="green"
      />
      <DashboardCard
        icon={<ShoppingOutlined 
          style={{
            color: "blue",
            backgroundColor: "rgba(0,0,255,0.25)",
            borderRadius: 20,
            fontSize: 24,
            padding: 8,
          }}/>}
        title="Inventory"
        value={inventory}
        color="blue"
      />
      <DashboardCard
        icon={<UserOutlined 
          tyle={{
            color: "purple",
            backgroundColor: "rgba(0,255,255,0.25)",
            borderRadius: 20,
            fontSize: 24,
            padding: 8,
          }}
        />}
        title="Customers"
        value={customers}
        color="purple"
      />
      <DashboardCard
        icon={<DollarCircleOutlined 
          style={{
            color: "red",
            backgroundColor: "rgba(255,0,0,0.25)",
            borderRadius: 20,
            fontSize: 24,
            padding: 8,
          }}/>}
        title="Revenue"
        value={revenue}
        color="red"
      />
     
      <RecentOrders />
      <DashboardChart />
      <PieChart />
    </Space>
  </Space>
);
}

function DashboardCard({ title, value, icon }) {
  return (
    <Card>
      <Space direction="horizontal">
        {icon}
        <Statistic title={title} value={value} />
      </Space>
    </Card>
  );
}
function RecentOrders() {
  const [dataSource, setDataSource] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getOrders().then((res) => {
      setDataSource(res.products.splice(0, 3));
      setLoading(false);
    });
  }, []);

  return (
    <>
      <Typography.Text>Recent Orders</Typography.Text>
      <Table
        columns={[
          {
            title: "Title",
            dataIndex: "title",
          },
          {
            title: "Quantity",
            dataIndex: "quantity",
          },
          {
            title: "Price",
            dataIndex: "discountedPrice",
          },
        ]}
        loading={loading}
        dataSource={dataSource}
        pagination={false}
      ></Table>
    </>
  );
}

function DashboardChart() {
  const [reveneuData, setReveneuData] = useState({
    labels: [],
    datasets: [],
  });

  useEffect(() => {
    getRevenue().then((res) => {
      const labels = res.carts.map((cart) => {
        return `User-${cart.userId}`;
      });
      const data = res.carts.map((cart) => {
        return cart.discountedTotal;
      });

      const dataSource = {
        labels,
        datasets: [
          {
            label: "Revenue",
            data: data,
            backgroundColor: "rgba(255, 0, 0, 1)",
          },
        ],
      };

      setReveneuData(dataSource);
    });
  }, []);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
      title: {
        display: true,
        text: "Order Revenue",
      },
    },
  };

  return (
    <Card style={{ width: 500, height: 350 }}>
      <Bar options={options} data={reveneuData} />
    </Card>
  );
}
function PieChart({ data }) {
 // Define state for pie chart data
 const [pieChartData, setPieChartData] = useState({
  labels: [],
  datasets: [],
});

// Fetch data for pie chart
useEffect(() => {
  getRevenue().then((res) => {
    const labels = res.carts.map((cart) => `User-${cart.userId}`);
    const data = res.carts.map((cart) => cart.total);

    const dataSource = {
      labels,
      datasets: [
        {
          label: "Order Total Revenue",
          data,
          backgroundColor: [
            "rgba(255, 99, 132, 0.6)",
            "rgba(54, 162, 235, 0.6)",
            "rgba(255, 206, 86, 0.6)",
            "rgba(75, 192, 192, 0.6)",
            "rgba(153, 102, 255, 0.6)",
            "rgba(255, 159, 64, 0.6)",
            "rgba(255, 99, 132, 0.6)",
            "rgba(54, 162, 235, 0.6)",
            "rgba(255, 206, 86, 0.6)",
            "rgba(75, 192, 192, 0.6)",
            "rgba(153, 102, 255, 0.6)",
            "rgba(255, 159, 64, 0.6)",
          ],
        },
      ],
    };

    setPieChartData(dataSource);
  });
}, []);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "bottom",
    },
    title: {
      display: true,
      text: "Order Total Revenue",
    },
  },
};
  return (
    <Card style={{ width: 500, height: 500 }}>
      <Pie data={pieChartData} options={options} />
    </Card>
  );
}
export default Dashboard;
