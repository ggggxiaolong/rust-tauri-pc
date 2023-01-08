import { ECBasicOption, EChartsOption } from "echarts/types/dist/shared";
export * from "./radar"

export function basicGaugeData(
  value: number = 50,
  name: string = "SCORE"
): ECBasicOption {
  return {
    tooltip: {
      formatter: "{a} <br/>{b} : {c}%",
    },
    series: [
      {
        name: "Pressure",
        type: "gauge",
        detail: {
          formatter: "{value}",
        },
        data: [
          {
            value: value,
            name: name,
          },
        ],
      },
    ],
  };
}

export function simpleGaugeData(
  value: number = 50,
  name: string = "SCORE"
): ECBasicOption {
  return {
    tooltip: {
      formatter: "{a} <br/>{b} : {c}%",
    },
    series: [
      {
        name: "Pressure",
        type: "gauge",
        progress: {
          show: true,
        },
        detail: {
          valueAnimation: true,
          formatter: "{value}",
        },
        data: [
          {
            value: value,
            name: name,
          },
        ],
      },
    ],
  };
}

export function speedGaugeData(value: number = 70): ECBasicOption {
  return {
    series: [
      {
        type: "gauge",
        progress: {
          show: true,
          width: 18,
        },
        axisLine: {
          lineStyle: {
            width: 18,
          },
        },
        axisTick: {
          show: false,
        },
        splitLine: {
          length: 15,
          lineStyle: {
            width: 2,
            color: "#999",
          },
        },
        axisLabel: {
          distance: 25,
          color: "#999",
          fontSize: 16,
        },
        anchor: {
          show: true,
          showAbove: true,
          size: 25,
          itemStyle: {
            borderWidth: 10,
          },
        },
        title: {
          show: false,
        },
        detail: {
          valueAnimation: true,
          fontSize: 40,
          offsetCenter: [0, "70%"],
        },
        data: [
          {
            value: value,
          },
        ],
      },
    ],
  };
}

export function progressGaugeData(data: number = 100): ECBasicOption {
  return {
    series: [
      {
        type: "gauge",
        startAngle: 180,
        endAngle: 0,
        min: 0,
        max: 240,
        splitNumber: 12,
        itemStyle: {
          color: "#58D9F9",
          shadowColor: "rgba(0,138,255,0.45)",
          shadowBlur: 10,
          shadowOffsetX: 2,
          shadowOffsetY: 2,
        },
        progress: {
          show: true,
          roundCap: true,
          width: 18,
        },
        pointer: {
          icon: "path://M2090.36389,615.30999 L2090.36389,615.30999 C2091.48372,615.30999 2092.40383,616.194028 2092.44859,617.312956 L2096.90698,728.755929 C2097.05155,732.369577 2094.2393,735.416212 2090.62566,735.56078 C2090.53845,735.564269 2090.45117,735.566014 2090.36389,735.566014 L2090.36389,735.566014 C2086.74736,735.566014 2083.81557,732.63423 2083.81557,729.017692 C2083.81557,728.930412 2083.81732,728.84314 2083.82081,728.755929 L2088.2792,617.312956 C2088.32396,616.194028 2089.24407,615.30999 2090.36389,615.30999 Z",
          length: "75%",
          width: 16,
          offsetCenter: [0, "5%"],
        },
        axisLine: {
          roundCap: true,
          lineStyle: {
            width: 18,
          },
        },
        axisTick: {
          splitNumber: 2,
          lineStyle: {
            width: 2,
            color: "#999",
          },
        },
        splitLine: {
          length: 12,
          lineStyle: {
            width: 3,
            color: "#999",
          },
        },
        axisLabel: {
          distance: 20,
          color: "#999",
          fontSize: 16,
        },
        title: {
          show: false,
        },
        detail: {
          backgroundColor: "#fff",
          borderColor: "#999",
          borderWidth: 2,
          width: "110%",
          lineHeight: 40,
          height: 40,
          borderRadius: 8,
          offsetCenter: [0, "35%"],
          valueAnimation: true,
          formatter: function (value: number) {
            return "{value|" + value.toFixed(0) + "}{unit|km/h}";
          },
          rich: {
            value: {
              fontSize: 50,
              fontWeight: "bolder",
              color: "#777",
            },
            unit: {
              fontSize: 20,
              color: "#999",
              padding: [0, 0, -20, 10],
            },
          },
        },
        data: [
          {
            value: data,
          },
        ],
      },
    ],
  };
}

export function stageGaugeData(data: number = 68.23): ECBasicOption {
  return {
    series: [
      {
        type: "gauge",
        axisLine: {
          lineStyle: {
            width: 30,
            color: [
              [0.3, "#67e0e3"],
              [0.7, "#37a2da"],
              [1, "#fd666d"],
            ],
          },
        },
        pointer: {
          itemStyle: {
            color: "inherit",
          },
        },
        axisTick: {
          distance: -30,
          length: 8,
          lineStyle: {
            color: "#fff",
            width: 2,
          },
        },
        splitLine: {
          distance: -30,
          length: 30,
          lineStyle: {
            color: "#fff",
            width: 4,
          },
        },
        axisLabel: {
          color: "inherit",
          distance: 40,
          fontSize: 20,
        },
        detail: {
          valueAnimation: true,
          formatter: "{value} km/h",
          color: "inherit",
          fontSize: 26,
        },
        data: [
          {
            value: data,
          },
        ],
      },
    ],
  };
}

export function gradeGaugeData(data: number = 70): ECBasicOption {
  return {
    series: [
      {
        type: "gauge",
        startAngle: 180,
        endAngle: 0,
        center: ["50%", "75%"],
        radius: "90%",
        min: 0,
        max: 1,
        splitNumber: 8,
        axisLine: {
          lineStyle: {
            width: 6,
            color: [
              [0.25, "#FF6E76"],
              [0.5, "#FDDD60"],
              [0.75, "#58D9F9"],
              [1, "#7CFFB2"],
            ],
          },
        },
        pointer: {
          icon: "path://M12.8,0.7l12,40.1H0.7L12.8,0.7z",
          length: "12%",
          width: 20,
          offsetCenter: [0, "-60%"],
          itemStyle: {
            color: "inherit",
          },
        },
        axisTick: {
          length: 12,
          lineStyle: {
            color: "inherit",
            width: 2,
          },
        },
        splitLine: {
          length: 20,
          lineStyle: {
            color: "inherit",
            width: 5,
          },
        },
        axisLabel: {
          color: "#464646",
          fontSize: 20,
          distance: -60,
          rotate: "tangential",
          formatter: function (value: number) {
            if (value === 0.875) {
              return "Grade A";
            } else if (value === 0.625) {
              return "Grade B";
            } else if (value === 0.375) {
              return "Grade C";
            } else if (value === 0.125) {
              return "Grade D";
            }
            return "";
          },
        },
        title: {
          offsetCenter: [0, "-10%"],
          fontSize: 20,
        },
        detail: {
          fontSize: 30,
          offsetCenter: [0, "-35%"],
          valueAnimation: true,
          formatter: function (value: number) {
            return Math.round(value * 100) + "";
          },
          color: "inherit",
        },
        data: [
          {
            value: data,
            name: "Grade Rating",
          },
        ],
      },
    ],
  };
}
export function multiTitleGaugeData(
  data1: number = 20,
  data2: number = 40,
  data3: number = 60
): ECBasicOption {
  const gaugeData = [
    {
      value: data1,
      name: "Good",
      title: {
        offsetCenter: ["-40%", "80%"],
      },
      detail: {
        offsetCenter: ["-40%", "95%"],
      },
    },
    {
      value: data2,
      name: "Better",
      title: {
        offsetCenter: ["0%", "80%"],
      },
      detail: {
        offsetCenter: ["0%", "95%"],
      },
    },
    {
      value: data3,
      name: "Perfect",
      title: {
        offsetCenter: ["40%", "80%"],
      },
      detail: {
        offsetCenter: ["40%", "95%"],
      },
    },
  ];
  return {
    series: [
      {
        type: "gauge",
        anchor: {
          show: true,
          showAbove: true,
          size: 18,
          itemStyle: {
            color: "#FAC858",
          },
        },
        pointer: {
          icon: "path://M2.9,0.7L2.9,0.7c1.4,0,2.6,1.2,2.6,2.6v115c0,1.4-1.2,2.6-2.6,2.6l0,0c-1.4,0-2.6-1.2-2.6-2.6V3.3C0.3,1.9,1.4,0.7,2.9,0.7z",
          width: 8,
          length: "80%",
          offsetCenter: [0, "8%"],
        },

        progress: {
          show: true,
          overlap: true,
          roundCap: true,
        },
        axisLine: {
          roundCap: true,
        },
        data: gaugeData,
        title: {
          fontSize: 14,
        },
        detail: {
          width: 40,
          height: 14,
          fontSize: 14,
          color: "#fff",
          backgroundColor: "inherit",
          borderRadius: 3,
          formatter: "{value}%",
        },
      },
    ],
  };
}

export function temperatureData(): EChartsOption {
  const random = +(Math.random() * 60).toFixed(2);
  return {
    series: [
      {
        data: [
          {
            value: random,
          },
        ],
      },
      {
        data: [
          {
            value: random,
          },
        ],
      },
    ],
  };
}

export function temperatureGaugeData(data: number = 16.78): ECBasicOption {
  return {
    series: [
      {
        type: "gauge",
        center: ["50%", "60%"],
        startAngle: 200,
        endAngle: -20,
        min: 0,
        max: 60,
        splitNumber: 12,
        itemStyle: {
          color: "#FFAB91",
        },
        progress: {
          show: true,
          width: 30,
        },
        pointer: {
          show: false,
        },
        axisLine: {
          lineStyle: {
            width: 30,
          },
        },
        axisTick: {
          distance: -45,
          splitNumber: 5,
          lineStyle: {
            width: 2,
            color: "#999",
          },
        },
        splitLine: {
          distance: -52,
          length: 14,
          lineStyle: {
            width: 3,
            color: "#999",
          },
        },
        axisLabel: {
          distance: -20,
          color: "#999",
          fontSize: 20,
        },
        anchor: {
          show: false,
        },
        title: {
          show: false,
        },
        detail: {
          valueAnimation: true,
          width: "60%",
          lineHeight: 40,
          borderRadius: 8,
          offsetCenter: [0, "-15%"],
          fontSize: 50,
          fontWeight: "bolder",
          formatter: "{value} °C",
          color: "inherit",
        },
        data: [
          {
            value: data,
          },
        ],
      },
      {
        type: "gauge",
        center: ["50%", "60%"],
        startAngle: 200,
        endAngle: -20,
        min: 0,
        max: 60,
        itemStyle: {
          color: "#FD7347",
        },
        progress: {
          show: true,
          width: 8,
        },
        pointer: {
          show: false,
        },
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        splitLine: {
          show: false,
        },
        axisLabel: {
          show: false,
        },
        detail: {
          show: false,
        },
        data: [
          {
            value: data,
          },
        ],
      },
    ],
  };
}

export function ringData(
  data1: number = 40.34,
  data2: number = 53.69,
  data3: number = 89.04
) {
  const gaugeData = [
    {
      value: data1,
      name: "Perfect",
      title: {
        offsetCenter: ["0%", "-30%"],
      },
      detail: {
        valueAnimation: true,
        offsetCenter: ["0%", "-20%"],
      },
    },
    {
      value: data2,
      name: "Good",
      title: {
        offsetCenter: ["0%", "0%"],
      },
      detail: {
        valueAnimation: true,
        offsetCenter: ["0%", "10%"],
      },
    },
    {
      value: data3,
      name: "Commonly",
      title: {
        offsetCenter: ["0%", "30%"],
      },
      detail: {
        valueAnimation: true,
        offsetCenter: ["0%", "40%"],
      },
    },
  ];
}

export function ringGaugeData(
  data1: number = 40.34,
  data2: number = 53.69,
  data3: number = 89.04
): ECBasicOption {
  const gaugeData = [
    {
      value: data1,
      name: "Perfect",
      title: {
        offsetCenter: ["0%", "-30%"],
      },
      detail: {
        valueAnimation: true,
        offsetCenter: ["0%", "-20%"],
      },
    },
    {
      value: data2,
      name: "Good",
      title: {
        offsetCenter: ["0%", "0%"],
      },
      detail: {
        valueAnimation: true,
        offsetCenter: ["0%", "10%"],
      },
    },
    {
      value: data3,
      name: "Commonly",
      title: {
        offsetCenter: ["0%", "30%"],
      },
      detail: {
        valueAnimation: true,
        offsetCenter: ["0%", "40%"],
      },
    },
  ];
  return {
    series: [
      {
        type: "gauge",
        startAngle: 90,
        endAngle: -270,
        pointer: {
          show: false,
        },
        progress: {
          show: true,
          overlap: false,
          roundCap: true,
          clip: false,
          itemStyle: {
            borderWidth: 1,
            borderColor: "#464646",
          },
        },
        axisLine: {
          lineStyle: {
            width: 40,
          },
        },
        splitLine: {
          show: false,
          distance: 0,
          length: 10,
        },
        axisTick: {
          show: false,
        },
        axisLabel: {
          show: false,
          distance: 50,
        },
        data: gaugeData,
        title: {
          fontSize: 14,
        },
        detail: {
          width: 50,
          height: 10,
          fontSize: 12,
          color: "inherit",
          borderColor: "inherit",
          borderRadius: 20,
          borderWidth: 1,
          formatter: "{value}%",
        },
      },
    ],
  };
}
export function barometerGaugeData(data: number = 58.46): ECBasicOption {
  return {
    series: [
      {
        type: "gauge",
        min: 0,
        max: 100,
        splitNumber: 10,
        radius: "80%",
        axisLine: {
          lineStyle: {
            color: [[1, "#f00"]],
            width: 3,
          },
        },
        splitLine: {
          distance: -18,
          length: 18,
          lineStyle: {
            color: "#f00",
          },
        },
        axisTick: {
          distance: -12,
          length: 10,
          lineStyle: {
            color: "#f00",
          },
        },
        axisLabel: {
          distance: -40,
          color: "#f00",
          fontSize: 25,
        },
        anchor: {
          show: true,
          size: 20,
          itemStyle: {
            borderColor: "#000",
            borderWidth: 2,
          },
        },
        pointer: {
          offsetCenter: [0, "10%"],
          icon: "path://M2090.36389,615.30999 L2090.36389,615.30999 C2091.48372,615.30999 2092.40383,616.194028 2092.44859,617.312956 L2096.90698,728.755929 C2097.05155,732.369577 2094.2393,735.416212 2090.62566,735.56078 C2090.53845,735.564269 2090.45117,735.566014 2090.36389,735.566014 L2090.36389,735.566014 C2086.74736,735.566014 2083.81557,732.63423 2083.81557,729.017692 C2083.81557,728.930412 2083.81732,728.84314 2083.82081,728.755929 L2088.2792,617.312956 C2088.32396,616.194028 2089.24407,615.30999 2090.36389,615.30999 Z",
          length: "115%",
          itemStyle: {
            color: "#000",
          },
        },
        detail: {
          valueAnimation: true,
          precision: 1,
        },
        title: {
          offsetCenter: [0, "-50%"],
        },
        data: [
          {
            value: data,
            name: "PLP",
          },
        ],
      },
      {
        type: "gauge",
        min: 0,
        max: 60,
        splitNumber: 6,
        axisLine: {
          lineStyle: {
            color: [[1, "#000"]],
            width: 3,
          },
        },
        splitLine: {
          distance: -3,
          length: 18,
          lineStyle: {
            color: "#000",
          },
        },
        axisTick: {
          distance: 0,
          length: 10,
          lineStyle: {
            color: "#000",
          },
        },
        axisLabel: {
          distance: 10,
          fontSize: 25,
          color: "#000",
        },
        pointer: {
          show: false,
        },
        title: {
          show: false,
        },
        anchor: {
          show: true,
          size: 14,
          itemStyle: {
            color: "#000",
          },
        },
      },
    ],
  };
}
export function clockGaugeData(hour: number=5, minute: number=15, second:number = 50): ECBasicOption {
  return {
    series: [
      {
        name: "hour",
        type: "gauge",
        startAngle: 90,
        endAngle: -270,
        min: 0,
        max: 12,
        splitNumber: 12,
        clockwise: true,
        axisLine: {
          lineStyle: {
            width: 15,
            color: [[1, "rgba(0,0,0,0.7)"]],
            shadowColor: "rgba(0, 0, 0, 0.5)",
            shadowBlur: 15,
          },
        },
        splitLine: {
          lineStyle: {
            shadowColor: "rgba(0, 0, 0, 0.3)",
            shadowBlur: 3,
            shadowOffsetX: 1,
            shadowOffsetY: 2,
          },
        },
        axisLabel: {
          fontSize: 24,
          distance: 25,
          formatter: function (value: number) {
            if (value === 0) {
              return "";
            }
            return value + "";
          },
        },
        anchor: {
          show: true,
          icon: "path://M532.8,70.8C532.8,70.8,532.8,70.8,532.8,70.8L532.8,70.8C532.7,70.8,532.8,70.8,532.8,70.8z M456.1,49.6c-2.2-6.2-8.1-10.6-15-10.6h-37.5v10.6h37.5l0,0c2.9,0,5.3,2.4,5.3,5.3c0,2.9-2.4,5.3-5.3,5.3v0h-22.5c-1.5,0.1-3,0.4-4.3,0.9c-4.5,1.6-8.1,5.2-9.7,9.8c-0.6,1.7-0.9,3.4-0.9,5.3v16h10.6v-16l0,0l0,0c0-2.7,2.1-5,4.7-5.3h10.3l10.4,21.2h11.8l-10.4-21.2h0c6.9,0,12.8-4.4,15-10.6c0.6-1.7,0.9-3.5,0.9-5.3C457,53,456.7,51.2,456.1,49.6z M388.9,92.1h11.3L381,39h-3.6h-11.3L346.8,92v0h11.3l3.9-10.7h7.3h7.7l3.9-10.6h-7.7h-7.3l7.7-21.2v0L388.9,92.1z M301,38.9h-10.6v53.1H301V70.8h28.4l3.7-10.6H301V38.9zM333.2,38.9v10.6v10.7v31.9h10.6V38.9H333.2z M249.5,81.4L249.5,81.4L249.5,81.4c-2.9,0-5.3-2.4-5.3-5.3h0V54.9h0l0,0c0-2.9,2.4-5.3,5.3-5.3l0,0l0,0h33.6l3.9-10.6h-37.5c-1.9,0-3.6,0.3-5.3,0.9c-4.5,1.6-8.1,5.2-9.7,9.7c-0.6,1.7-0.9,3.5-0.9,5.3l0,0v21.3c0,1.9,0.3,3.6,0.9,5.3c1.6,4.5,5.2,8.1,9.7,9.7c1.7,0.6,3.5,0.9,5.3,0.9h33.6l3.9-10.6H249.5z M176.8,38.9v10.6h49.6l3.9-10.6H176.8z M192.7,81.4L192.7,81.4L192.7,81.4c-2.9,0-5.3-2.4-5.3-5.3l0,0v-5.3h38.9l3.9-10.6h-53.4v10.6v5.3l0,0c0,1.9,0.3,3.6,0.9,5.3c1.6,4.5,5.2,8.1,9.7,9.7c1.7,0.6,3.4,0.9,5.3,0.9h23.4h10.2l3.9-10.6l0,0H192.7z M460.1,38.9v10.6h21.4v42.5h10.6V49.6h17.5l3.8-10.6H460.1z M541.6,68.2c-0.2,0.1-0.4,0.3-0.7,0.4C541.1,68.4,541.4,68.3,541.6,68.2L541.6,68.2z M554.3,60.2h-21.6v0l0,0c-2.9,0-5.3-2.4-5.3-5.3c0-2.9,2.4-5.3,5.3-5.3l0,0l0,0h33.6l3.8-10.6h-37.5l0,0c-6.9,0-12.8,4.4-15,10.6c-0.6,1.7-0.9,3.5-0.9,5.3c0,1.9,0.3,3.7,0.9,5.3c2.2,6.2,8.1,10.6,15,10.6h21.6l0,0c2.9,0,5.3,2.4,5.3,5.3c0,2.9-2.4,5.3-5.3,5.3l0,0h-37.5v10.6h37.5c6.9,0,12.8-4.4,15-10.6c0.6-1.7,0.9-3.5,0.9-5.3c0-1.9-0.3-3.7-0.9-5.3C567.2,64.6,561.3,60.2,554.3,60.2z",
          showAbove: false,
          offsetCenter: [0, "-35%"],
          size: 120,
          keepAspect: true,
          itemStyle: {
            color: "#707177",
          },
        },
        pointer: {
          icon: "path://M2.9,0.7L2.9,0.7c1.4,0,2.6,1.2,2.6,2.6v115c0,1.4-1.2,2.6-2.6,2.6l0,0c-1.4,0-2.6-1.2-2.6-2.6V3.3C0.3,1.9,1.4,0.7,2.9,0.7z",
          width: 12,
          length: "55%",
          offsetCenter: [0, "8%"],
          itemStyle: {
            color: "#C0911F",
            shadowColor: "rgba(0, 0, 0, 0.3)",
            shadowBlur: 8,
            shadowOffsetX: 2,
            shadowOffsetY: 4,
          },
        },
        detail: {
          show: false,
        },
        title: {
          offsetCenter: [0, "30%"],
        },
        data: [
          {
            value: hour,
          },
        ],
      },
      {
        name: "minute",
        type: "gauge",
        startAngle: 90,
        endAngle: -270,
        min: 0,
        max: 60,
        clockwise: true,
        axisLine: {
          show: false,
        },
        splitLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        axisLabel: {
          show: false,
        },
        pointer: {
          icon: "path://M2.9,0.7L2.9,0.7c1.4,0,2.6,1.2,2.6,2.6v115c0,1.4-1.2,2.6-2.6,2.6l0,0c-1.4,0-2.6-1.2-2.6-2.6V3.3C0.3,1.9,1.4,0.7,2.9,0.7z",
          width: 8,
          length: "70%",
          offsetCenter: [0, "8%"],
          itemStyle: {
            color: "#C0911F",
            shadowColor: "rgba(0, 0, 0, 0.3)",
            shadowBlur: 8,
            shadowOffsetX: 2,
            shadowOffsetY: 4,
          },
        },
        anchor: {
          show: true,
          size: 20,
          showAbove: false,
          itemStyle: {
            borderWidth: 15,
            borderColor: "#C0911F",
            shadowColor: "rgba(0, 0, 0, 0.3)",
            shadowBlur: 8,
            shadowOffsetX: 2,
            shadowOffsetY: 4,
          },
        },
        detail: {
          show: false,
        },
        title: {
          offsetCenter: ["0%", "-40%"],
        },
        data: [
          {
            value: minute,
          },
        ],
      },
      {
        name: "second",
        type: "gauge",
        startAngle: 90,
        endAngle: -270,
        min: 0,
        max: 60,
        animationEasingUpdate: "bounceOut",
        clockwise: true,
        axisLine: {
          show: false,
        },
        splitLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        axisLabel: {
          show: false,
        },
        pointer: {
          icon: "path://M2.9,0.7L2.9,0.7c1.4,0,2.6,1.2,2.6,2.6v115c0,1.4-1.2,2.6-2.6,2.6l0,0c-1.4,0-2.6-1.2-2.6-2.6V3.3C0.3,1.9,1.4,0.7,2.9,0.7z",
          width: 4,
          length: "85%",
          offsetCenter: [0, "8%"],
          itemStyle: {
            color: "#C0911F",
            shadowColor: "rgba(0, 0, 0, 0.3)",
            shadowBlur: 8,
            shadowOffsetX: 2,
            shadowOffsetY: 4,
          },
        },
        anchor: {
          show: true,
          size: 15,
          showAbove: true,
          itemStyle: {
            color: "#C0911F",
            shadowColor: "rgba(0, 0, 0, 0.3)",
            shadowBlur: 8,
            shadowOffsetX: 2,
            shadowOffsetY: 4,
          },
        },
        detail: {
          show: false,
        },
        title: {
          offsetCenter: ["0%", "-40%"],
        },
        data: [
          {
            value: second,
          },
        ],
      },
    ],
  };
}

export function clockDate(): EChartsOption {
  var date = new Date();
  var second = date.getSeconds();
  var minute = date.getMinutes() + second / 60;
  var hour = (date.getHours() % 12) + minute / 60;
  return {
    series: [
      {
        name: "hour",
        animation: hour !== 0,
        data: [{ value: hour }],
      },
      {
        name: "minute",
        animation: minute !== 0,
        data: [{ value: minute }],
      },
      {
        animation: second !== 0,
        name: "second",
        data: [{ value: second }],
      },
    ],
  };
}
export function carGaugeData(
  data1: number = 250,
  data2: number = 0,
  data3: number = 0.06
): ECBasicOption {
  return {
    backgroundColor: "#000",
    tooltip: {
      formatter: "{a} <br/>{b} : {c}%",
    },
    toolbox: {
      feature: {
        restore: {},
        saveAsImage: {},
      },
    },
    series: [
      // left
      {
        name: "gauge 0",
        type: "gauge",
        min: -200,
        max: 250,
        startAngle: -30,
        endAngle: -315,
        splitNumber: 9,
        radius: "35%",
        center: ["21%", "55%"],
        axisLine: {
          lineStyle: {
            color: [[1, "#AE96A6"]],
          },
        },
        splitLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        axisLabel: {
          show: false,
        },
        anchor: {},
        pointer: {
          show: false,
        },
        detail: {
          show: false,
        },
        title: {
          fontSize: 12,
          fontWeight: 800,
          fontFamily: "Arial",
          color: "#fff",
          offsetCenter: [0, "-60%"],
        },
        progress: {
          show: true,
          width: 3,
          itemStyle: {
            color: "#fff",
          },
        },
        data: [
          {
            value: data1,
            name: "km/h",
          },
        ],
      },
      {
        name: "gauge 1",
        type: "gauge",
        min: 0,
        max: 250,
        startAngle: -140,
        endAngle: -305,
        splitNumber: 5,
        radius: "35%",
        center: ["21%", "55%"],
        axisLine: {
          lineStyle: {
            color: [[1, "#AE96A6"]],
          },
        },
        splitLine: {
          distance: -7,
          length: 12,
          lineStyle: {
            color: "#fff",
            width: 4,
          },
        },
        axisTick: {
          distance: -8,
          length: 8,
          lineStyle: {
            color: "#fff",
            width: 2,
          },
        },
        axisLabel: {
          distance: 14,
          fontSize: 18,
          fontWeight: 800,
          fontFamily: "Arial",
          color: "#fff",
        },
        anchor: {},
        pointer: {
          icon: "path://M-36.5,23.9L-41,4.4c-0.1-0.4-0.4-0.7-0.7-0.7c-0.5-0.1-1.1,0.2-1.2,0.7l-4.5,19.5c0,0.1,0,0.1,0,0.2v92.3c0,0.6,0.4,1,1,1h9c0.6,0,1-0.4,1-1V24.1C-36.5,24-36.5,23.9-36.5,23.9z M-39.5,114.6h-5v-85h5V114.6z",
          width: 5,
          length: "40%",
          offsetCenter: [0, "-58%"],
          itemStyle: {
            color: "#f00",
            shadowColor: "rgba(255, 0, 0)",
            shadowBlur: 5,
            shadowOffsetY: 2,
          },
        },
        title: {
          color: "#fff",
          fontSize: 14,
          fontWeight: 800,
          fontFamily: "Arial",
          offsetCenter: [0, 0],
        },
        detail: {
          show: false,
        },
        data: [
          {
            value: data2,
            name: "当前位置：\n \n 中科路",
          },
        ],
      },
      // middle
      {
        name: "gauge 2",
        type: "gauge",
        min: 0,
        max: 8,
        z: 10,
        startAngle: 210,
        endAngle: -30,
        splitNumber: 8,
        radius: "50%",
        center: ["50%", "50%"],
        axisLine: {
          show: true,
          lineStyle: {
            width: 0,
            color: [
              [0.825, "#fff"],
              [1, "#f00"],
            ],
          },
        },
        splitLine: {
          distance: 20,
          length: 15,
          lineStyle: {
            color: "inherit",
            width: 4,
            shadowColor: "rgba(255, 255, 255, 0.5)",
            shadowBlur: 15,
            shadowOffsetY: -10,
          },
        },
        axisTick: {
          distance: 20,
          length: 8,
          lineStyle: {
            color: "inherit",
            width: 2,
            shadowColor: "rgba(255, 255, 255)",
            shadowBlur: 10,
            shadowOffsetY: -10,
          },
        },
        axisLabel: {
          distance: 10,
          fontSize: 35,
          fontWeight: 800,
          fontFamily: "Arial",
          color: "#fff",
        },
        anchor: {},
        pointer: {
          icon: "path://M-36.5,23.9L-41,4.4c-0.1-0.4-0.4-0.7-0.7-0.7c-0.5-0.1-1.1,0.2-1.2,0.7l-4.5,19.5c0,0.1,0,0.1,0,0.2v92.3c0,0.6,0.4,1,1,1h9c0.6,0,1-0.4,1-1V24.1C-36.5,24-36.5,23.9-36.5,23.9z M-39.5,114.6h-5v-85h5V114.6z",
          width: 10,
          offsetCenter: [0, "-10%"],
          length: "75%",
          itemStyle: {
            color: "#f00",
            shadowColor: "rgba(255, 0, 0)",
            shadowBlur: 5,
            shadowOffsetY: 3,
          },
        },
        title: {
          color: "#fff",
          fontSize: 12,
          fontWeight: 800,
          fontFamily: "Arial",
          offsetCenter: [0, "-50%"],
        },
        data: [
          {
            value: data3,
            name: "1/min x 1000",
          },
        ],
        detail: {
          show: false,
        },
      },
      {
        name: "gauge 3",
        type: "gauge",
        min: 0,
        max: 8,
        z: 10,
        splitNumber: 8,
        radius: "50%",
        axisLine: {
          lineStyle: {
            width: 14,
            color: [[1, "#000"]],
          },
        },
        splitLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        axisLabel: {
          show: false,
        },
        anchor: {},
        pointer: {
          show: false,
        },
        title: {
          show: false,
        },
        detail: {
          offsetCenter: ["25%", "50%"],
          formatter: "{a|{value}}{b|km/h}",
          rich: {
            a: {
              fontSize: 60,
              fontWeight: 800,
              fontFamily: "Arial",
              color: "#fff",
              align: "center",
              padding: [0, 5, 0, 0],
            },
            b: {
              fontSize: 14,
              fontWeight: 800,
              fontFamily: "Arial",
              color: "#fff",
              padding: [0, 0, 20, 0],
            },
          },
        },
        // value is speed
        data: [
          {
            value: 0,
            name: "",
          },
        ],
      },
      // right
      {
        name: "gauge 4",
        type: "gauge",
        min: 0,
        max: 8,
        startAngle: 135,
        endAngle: -150,
        splitNumber: 8,
        radius: "35%",
        center: ["79%", "55%"],
        axisLine: {
          lineStyle: {
            color: [[1, "#AE96A6"]],
          },
        },
        splitLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        axisLabel: {
          show: false,
        },
        anchor: {},
        pointer: {
          show: false,
        },
        title: {},
        detail: {
          offsetCenter: ["-15%", 0],
          formatter: [
            "{a|                  00:00}",
            "{a|行驶时间       0:00}{b| h}",
            "{a|行驶距离        0.0}{b| km}",
            "{a|平均耗能        ---}{b| 1/100km}",
            "{a|平均速度        ---}{b| km/h}",
          ].join("\n"),
          rich: {
            a: {
              fontSize: 14,
              fontWeight: 800,
              fontFamily: "Arial",
              lineHeight: 22,
              color: "#fff",
              align: "left",
            },
            b: {
              fontWeight: 600,
              fontFamily: "Arial",
              lineHeight: 22,
              color: "#fff",
              align: "left",
            },
          },
        },
        progress: {
          show: true,
          width: 3,
          itemStyle: {
            color: "#fff",
          },
        },
        data: [
          {
            value: 250,
            name: "",
          },
        ],
      },
      {
        name: "gauge 5",
        type: "gauge",
        min: 0,
        max: 1,
        startAngle: 125,
        endAngle: 55,
        splitNumber: 2,
        radius: "34%",
        center: ["79%", "55.3%"],
        axisLine: {
          lineStyle: {
            width: 9,
            color: [
              [0.15, "#f00"],
              [1, "rgba(255, 0, 0, 0)"],
            ],
          },
        },
        splitLine: {
          distance: -14,
          length: 16,
          lineStyle: {
            color: "#fff",
            width: 4,
          },
        },
        axisTick: {
          distance: -14,
          length: 10,
          lineStyle: {
            color: "#fff",
            width: 2,
          },
        },
        axisLabel: {
          distance: 12,
          fontSize: 18,
          fontWeight: 800,
          fontFamily: "Arial",
          color: "#fff",
          formatter: function (value: number) {
            if (value === 0.5) {
              return "2/4";
            }
            if (value === 1) {
              return "4/4";
            }
            return value + "";
          },
        },
        progress: {
          show: true,
          width: 5,
          itemStyle: {
            color: "#fff",
          },
        },
        anchor: {
          show: true,
          itemStyle: {},
          offsetCenter: ["-22%", "-57%"],
          size: 18,
          icon: "path://M1.11979167,1.11111112 C1.11979167,0.497461393 1.61725306,0 2.23090279,0 L12.2309028,0 C12.8445525,1.43824153e-08 13.3420139,0.497461403 13.3420139,1.11111112 L13.3420139,10 L15.5642361,10 C16.7915356,10 17.7864583,10.9949228 17.7864583,12.2222222 L17.7864583,16.6666667 C17.7865523,17.28025 18.2839861,17.7776077 18.8975694,17.7776077 C19.5111527,17.7776077 20.0085866,17.28025 20.0086805,16.6666667 L20.0086805,8.88888888 L17.7864583,8.88888888 C17.1728086,8.88888888 16.6753472,8.3914275 16.6753472,7.77777779 L16.6753472,3.79333333 L15.6197917,2.73777777 C15.1859413,2.30392741 15.1859413,1.60051702 15.6197917,1.16666667 L15.6197917,1.16666667 C16.053642,0.732816318 16.7570524,0.732816318 17.1909028,1.16666667 L21.9053472,5.88111112 C22.1140468,6.08922811 22.2312072,6.37193273 22.2309028,6.66666667 L22.2309028,16.6666667 C22.2309028,18.5076158 20.7385186,20 18.8975695,20 C17.0566203,20 15.5642361,18.5076158 15.5642361,16.6666667 L15.5642361,12.2222222 L13.3420139,12.2222222 L13.3420139,17.7777778 L13.3420139,17.7777778 C13.9556636,17.7777778 14.453125,18.2752392 14.453125,18.8888889 L14.453125,18.8888889 C14.453125,19.5025386 13.9556636,20 13.3420139,20 L1.11979165,20 C0.506141934,20 0.00868054688,19.5025386 0.00868054687,18.8888889 L0.00868054687,18.8888889 C0.00868054688,18.2752392 0.506141934,17.7777778 1.11979165,17.7777778 L1.11979167,17.7777778 L1.11979167,1.11111112 Z M3.34201388,2.22222221 L3.34201388,8.88888888 L11.1197917,8.88888888 L11.1197917,2.22222221 L3.34201388,2.22222221 Z",
        },
        pointer: {
          show: false,
        },
        title: {},
        detail: {
          offsetCenter: ["10%", "-56%"],
          formatter: "{a|831}{b| km}",
          rich: {
            a: {
              fontSize: 15,
              fontWeight: 800,
              fontFamily: "Arial",
              color: "#fff",
            },
            b: {
              fontWeight: 600,
              fontFamily: "Arial",
              color: "#fff",
            },
          },
        },
        data: [
          {
            value: 0.85,
            name: "",
          },
        ],
      },
      {
        name: "gauge 6",
        type: "gauge",
        min: -120,
        max: -60,
        startAngle: 230,
        endAngle: 310,
        clockwise: false,
        splitNumber: 2,
        radius: "35%",
        center: ["79%", "55%"],
        axisLine: {
          lineStyle: {
            color: [
              [1, "#AE96A6"],
              [1.1, "#f00"],
            ],
          },
        },
        splitLine: {
          distance: -8,
          length: 12,
          lineStyle: {
            color: "#fff",
            width: 4,
          },
        },
        axisTick: {
          splitNumber: 3,
          length: 8,
          distance: -8,
          lineStyle: {
            color: "#fff",
            width: 2,
          },
        },
        axisLabel: {
          distance: 14,
          fontSize: 18,
          fontWeight: 800,
          fontFamily: "Arial",
          color: "#fff",
          formatter: function (value: number) {
            return -value + "";
          },
        },
        anchor: {
          show: true,
          itemStyle: {},
          offsetCenter: [0, "55%"],
          size: 20,
          icon: "path://M-34.1-1.1L-34.1-1.1c0-0.3-0.3-0.6-0.6-0.6h-3.6v-1.5c0-0.5-0.2-0.9-0.6-1.1s-0.9-0.2-1.3,0c-0.4,0.2-0.6,0.7-0.6,1.1V7.9c0,0,0,0.1,0,0.1c-0.8,0.5-1.2,1.5-0.9,2.5c0.3,0.9,1.1,1.6,2.1,1.6c1,0,1.8-0.6,2.1-1.5c0.3-0.9,0-1.9-0.8-2.5V6.3h3.5c0.4,0,0.7-0.3,0.7-0.7l0,0c0-0.4-0.3-0.7-0.7-0.7h-3.5V2.9h3.5c0.4,0,0.7-0.3,0.7-0.7l0,0c0-0.4-0.3-0.7-0.7-0.7h-3.5v-2.1h3.6C-34.4-0.5-34.1-0.8-34.1-1.1z M-44.9,11.6c-0.7,0-1.4-0.2-2-0.6c-0.4-0.3-0.9-0.4-1.4-0.4c-0.4,0-0.9,0.2-1.2,0.4c-0.4,0.2-1.4-0.9-0.9-1.3c0.6-0.4,1.3-0.6,2-0.7c0.8,0,1.5,0.2,2.2,0.5c0.4,0.3,0.9,0.4,1.3,0.4c0.6,0,1.1-0.2,1.5-0.6s1.6,0.7,0.9,1.3S-44,11.6-44.9,11.6L-44.9,11.6z M-34.3,11.6c-0.7,0-1.4-0.3-2-0.7c-0.6-0.4,0.5-1.6,0.9-1.3s0.8,0.4,1.2,0.4c0.5,0,1-0.1,1.4-0.4c0.6-0.3,1.3-0.5,2-0.6h0c0.9,0,1.7,0.3,2.4,0.9c0.7,0.5-0.5,1.6-0.9,1.3c-0.4-0.3-1-0.6-1.5-0.6h0c-0.5,0-0.9,0.2-1.3,0.4c-0.6,0.3-1.3,0.5-2,0.6H-34.3z M-33.5,16.3c-0.7,0-1.4-0.3-1.9-0.8c-0.4-0.3-0.6-0.5-1-0.5c-0.4,0-0.7,0.2-1,0.4c-0.6,0.5-1.3,0.7-2,0.7c-0.7,0-1.4-0.3-1.9-0.8c-0.2-0.3-0.6-0.4-0.9-0.4c-0.4,0-0.7,0.1-1.1,0.5c-0.6,0.5-1.3,0.7-2.1,0.7c-0.7-0.1-1.4-0.4-1.9-0.9c-0.4-0.3-0.6-0.5-1-0.5c-0.3,0-0.6,0.2-0.9,0.4s-1.6-0.7-1.1-1.2c0.5-0.5,1.2-0.8,1.9-0.9c1-0.1,1.6,0.4,2.1,0.8c0.3,0.3,0.6,0.5,1,0.5c0.4,0,0.6-0.1,1-0.4c0.6-0.5,1.4-0.8,2.1-0.8c0.7,0,1.4,0.3,1.9,0.8c0.2,0.2,0.6,0.4,0.9,0.4c0.4,0,0.6-0.1,1-0.4c0.6-0.5,1.3-0.7,2-0.7c0.8,0,1.5,0.3,2,0.9c0.4,0.3,0.6,0.4,0.9,0.4c0.3,0,0.7-0.2,1.1-0.5c0.5-0.4,1.2-0.9,2.3-0.8c0.7,0,1.4,0.3,1.9,0.7c0.5,0.4-0.7,1.5-1,1.3s-0.6-0.4-1-0.4c-0.4,0-0.7,0.2-1.2,0.5C-32,15.9-32.7,16.2-33.5,16.3L-33.5,16.3z",
        },
        pointer: {
          icon: "path://M2.9,0.7L2.9,0.7c1.4,0,2.6,1.2,2.6,2.6v115c0,1.4-1.2,2.6-2.6,2.6l0,0c-1.4,0-2.6-1.2-2.6-2.6V3.3C0.3,1.9,1.4,0.7,2.9,0.7z",
          width: 15,
          length: "4",
          offsetCenter: [0, "-90%"],
          itemStyle: {
            color: "#f00",
          },
        },
        title: {},
        detail: {
          show: false,
        },
        data: [
          {
            value: -120,
            name: "",
          },
        ],
      },
    ],
  };
}
// export function stageGaugeData(data: number): ECBasicOption {
// export function stageGaugeData(data: number): ECBasicOption {
// export function stageGaugeData(data: number): ECBasicOption {
// export function stageGaugeData(data: number): ECBasicOption {
// export function stageGaugeData(data: number): ECBasicOption {
