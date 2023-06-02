import { Pie } from "@nivo/pie";
import { data } from "./data";

  
   const ResponsivePie = () => (
    <Pie
        data={data}
        height={500} 
        width={500}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={0.6}
        activeOuterRadiusOffset={8}
        borderWidth={1}
        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    0.2
                ]
            ]
        }}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="#333333"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: 'color' }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    2
                ]
            ]
        }}
        defs={[
            {
                id: 'styles',
                type: 'solid',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                size: 4,
                padding: 1,
                stagger: true
            }
        ]}
        fill={[
            {
                match: {
                    id: 'antifraude'
                },
                id: 'styles'
            },
            {
                match: {
                    id: "captura",
                },
                id: 'styles'
            },
            {
                match: {
                    id: 'carrinho'
                },
                id: 'styles'
            },
            {
                match: {
                    id: 'picking'
                },
                id: 'styles'
            }
        ]}
        /* legends={[
            {
                anchor: 'bottom',
                direction: 'row',
                justify: false,
                translateX: 0,
                translateY: 56,
                itemsSpacing: 0,
                itemWidth: 100,
                itemHeight: 18,
                itemTextColor: '#999',
                itemDirection: 'left-to-right',
                itemOpacity: 1,
                symbolSize: 18,
                symbolShape: 'circle',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemTextColor: '#000'
                        }
                    }
                ]
            }
        ]} */
    />
)

export default ResponsivePie;