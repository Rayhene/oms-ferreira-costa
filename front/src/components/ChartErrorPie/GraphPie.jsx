import { Pie } from "@nivo/pie";
import useSWR from 'swr';
import { buscarTodosPedidos } from "../../services/api";
import { useState, useEffect } from "react";

const ResponsivePie = () => {
  const { data: pedidos, error } = useSWR("/api/pedidos", buscarTodosPedidos);
  const [isLoading, setIsLoading] = useState(true);
  const [updatedData, setUpdatedData] = useState([]);

  useEffect(() => {
    if (pedidos) {
      setIsLoading(false);
    }
  }, [pedidos]);

  useEffect(() => {
    if (!isLoading && pedidos && pedidos.length > 0) {
      const erroAntifraudeCount = pedidos.filter(
        (item) => item.status_erro && item.status_pedido === "ANTIFRAUDE"
      ).length;

      const successCount = pedidos.length - erroAntifraudeCount;
      const totalCount = pedidos.length;

      const successPercentage = ((successCount / totalCount) * 100).toFixed(0);
      const errorPercentage = ((erroAntifraudeCount / totalCount) * 100).toFixed(0);

      const updatedData = [
        {
          id: `${successPercentage}%`,
          label: "Sucessos",
          value: successCount,
          color: "##00b233",
        },
        {
          id: `${errorPercentage}%`,
          label: "Erros",
          value: erroAntifraudeCount,
          color: "#FF5757",
        },
      ];

      setUpdatedData(updatedData);
    }
  }, [isLoading, pedidos]);

  const colorMapping = (datum) => {
    return datum.label === "Erros" ? "#FF5757" : "#00b233";
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <Pie
      data={updatedData}
      height={400}
      width={400}
      margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
      innerRadius={0.6}
      activeOuterRadiusOffset={8}
      borderWidth={1}
      borderColor={{
        from: "color",
        modifiers: [["darker", 0.2]],
      }}
      arcLinkLabelsSkipAngle={10}
      arcLinkLabelsTextColor="#333333"
      arcLinkLabelsThickness={2}
      enableArcLabels={false}
      arcLinkLabelsColor={{ from: "color" }}
      arcLabelsSkipAngle={10}
      arcLabelsTextColor={{
        from: "color",
        modifiers: [["darker", 2]],
      }}
      colors={colorMapping}
      legends={[
        {
          anchor: "bottom",
          direction: "row",
          justify: false,
          translateX: 0,
          translateY: 56,
          itemsSpacing: 0,
          itemWidth: 100,
          itemHeight: 18,
          itemTextColor: "#999",
          itemDirection: "left-to-right",
          itemOpacity: 1,
          symbolSize: 18,
          symbolShape: "circle",
          effects: [
            {
              on: "hover",
              style: {
                itemTextColor: "#000",
              },
            },
          ],
        },
      ]}
    />
  );
};

export default ResponsivePie;
