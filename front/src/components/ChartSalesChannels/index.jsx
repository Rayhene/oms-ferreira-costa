import React from 'react';
import { Pie } from '@nivo/pie';
import { Box, Flex } from '@chakra-ui/react';

const ChartSalesChannels = () => {
  const updatedData = [
    {
      id: '34%',
      label: 'Loja física',
      value: 34,
    },
    {
      id: '30%',
      label: 'Telefone',
      value: 30,
    },
    {
      id: '36%',
      label: 'Site',
      value: 36,
    },
  ];

  const colors = ['#830707', '#EC5466', '#EF9A9A'];

  const CustomTooltip = ({ datum }) => (
    <div
      style={{
        background: 'white',
        padding: '10px',
        border: '1px solid #ccc',
      }}
    >
      <strong>{datum.label}</strong>
      <br />
      {`${datum.value}%`}
    </div>
  );

  return (
    <Box
      textAlign="left"
      padding="2vw"
      minH="400px"
      maxW="lg"
      mt="4vh"
      boxShadow="base"
      border="1px"
      borderColor="gray.300"
      borderRadius="8"
    >
      <h1 style={{ fontWeight: 'bold' }}>Vendas por canal</h1>
      <h2>Em relação ao total de pedidos</h2>
      <Pie
        data={updatedData}
        height={300}
        width={400}
        margin={{ top: 40, right: 80, bottom: 80, left: 0 }}
        innerRadius={0.6}
        activeOuterRadiusOffset={8}
        borderWidth={1}
        borderColor={{
          from: 'color',
          modifiers: [['darker', 0.2]],
        }}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="#333333"
        arcLinkLabelsThickness={1}
        enableArcLabels={false}
        arcLinkLabelsColor={{ from: 'color' }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{
          from: 'color',
          modifiers: [['darker', 2]],
        }}
        colors={colors}
        legends={[
          {
            anchor: 'bottom',
            direction: 'row',
            justify: false,
            translateX: 0,
            translateY: 56,
            itemsSpacing: 0,
            itemWidth: 100,
            itemHeight: -20,
            itemTextColor: '#000',
            itemDirection: 'left-to-right',
            itemOpacity: 1,
            symbolSize: 18,
            symbolShape: 'circle',
            effects: [
              {
                on: 'hover',
                style: {
                  itemTextColor: '#000',
                },
              },
            ],
            label: (legendItem) => `${legendItem.label} (${legendItem.value}%)`,
          },
        ]}
        tooltip={CustomTooltip}
      />
    </Box>
  );
};

export default ChartSalesChannels;
