export const TeamCardBackground = () => {
  return (
    <svg
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        zIndex: -1,
      }}
      viewBox="-80 -70 750 150"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <linearGradient
          id="svg-gradient-var"
          x1="671.5"
          y1="-2543.5"
          x2="2774.42"
          y2="-903.522"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="32.55%" stopColor="#FFFFFF"></stop>
          <stop offset="64.38%" stopColor="#F5F2F5"></stop>
        </linearGradient>
      </defs>

      <path
        d="M1476.18 343.773C1417.62 314.292 1359.88 282.402 1303.25 247.956H1370.01C1238.91 168.211 1113.73 74.8191 997.693 -33.3461H1053.33C1037.45 -48.144 1021.68 -63.1311 1006.15 -78.4882C930.279 -153.539 860.623 -232.469 797.157 -314.639H841.666C772.051 -404.776 709.962 -498.833 655.282 -595.941H688.664C637.256 -687.236 592.418 -781.22 554.223 -877.242H576.478C543.418 -960.341 515.278 -1044.94 492.109 -1130.61L520.117 -1158.54C554.586 -1062.74 595.542 -968.768 642.869 -877.242H620.615C670.679 -780.455 727.914 -686.422 792.377 -595.941H758.995C829.022 -497.649 907.547 -403.542 994.602 -314.639H950.093C959.003 -305.547 967.971 -296.487 977.054 -287.501C1073.1 -192.49 1175.92 -107.911 1283.7 -33.3378H1228.07C1356.01 55.1788 1490.99 129.53 1630.08 190.268L1476.18 343.781V343.773ZM1448.17 371.708C1309.06 310.97 1174.09 236.619 1046.15 148.102H1101.78C994.008 73.5283 891.194 -11.0503 795.138 -106.062C786.055 -115.047 777.079 -124.107 768.177 -133.199H812.686C725.63 -222.103 647.106 -316.21 577.079 -414.501H610.461C545.997 -504.982 488.763 -599.007 438.699 -695.803H460.953C413.618 -787.328 372.67 -881.304 338.201 -977.104L310.193 -949.169C333.362 -863.505 361.502 -778.901 394.562 -695.803H372.307C410.51 -599.78 455.349 -505.796 506.748 -414.501H473.366C528.046 -317.393 590.143 -223.336 659.75 -133.199H615.241C678.707 -51.0295 748.363 27.9094 824.233 102.952C839.762 118.309 855.529 133.296 871.412 148.094H815.776C931.82 256.25 1057 349.651 1188.1 429.395H1121.34C1177.97 463.842 1235.71 495.731 1294.26 525.212L1448.17 371.7V371.708ZM1812 8.81189C1672.89 -51.9257 1537.93 -126.277 1409.98 -214.794H1465.62C1357.84 -289.368 1255.03 -373.946 1158.97 -468.958C1149.89 -477.943 1140.91 -487.003 1132.01 -496.096H1176.52C1089.46 -584.999 1010.94 -679.105 940.911 -777.397H974.293C909.83 -867.878 852.595 -961.903 802.531 -1058.7H824.785C777.45 -1150.22 736.502 -1244.2 702.033 -1340L674.025 -1312.06C697.194 -1226.4 725.334 -1141.8 758.394 -1058.7H736.139C774.342 -962.676 819.181 -868.692 870.58 -777.397H837.198C891.878 -680.289 953.975 -586.232 1023.58 -496.096H979.073C1042.54 -413.926 1112.19 -334.987 1188.07 -259.944C1203.59 -244.587 1219.36 -229.6 1235.24 -214.802H1179.61C1295.65 -106.645 1420.83 -13.2455 1551.93 66.4993H1485.17C1541.8 100.946 1599.54 132.835 1658.09 162.316L1812 8.80359V8.81189ZM901.983 916.487C762.877 855.75 627.91 781.398 499.964 692.882H555.6C447.823 618.308 345.009 533.729 248.953 438.718C239.87 429.732 230.894 420.673 221.992 411.58H266.501C179.445 322.677 100.921 228.57 30.8943 130.279H64.2756C-0.187485 39.7971 -57.4221 -54.2277 -107.486 -151.023H-85.2316C-132.567 -242.548 -173.515 -336.524 -207.984 -432.324L-236 -404.381C-212.831 -318.717 -184.692 -234.114 -151.632 -151.015H-173.886C-135.683 -54.9922 -90.8447 38.9915 -39.4456 130.287H-72.827C-18.1475 227.395 43.9501 321.452 113.556 411.588H69.0479C132.514 493.758 202.169 572.697 278.04 647.74C293.568 663.097 309.336 678.084 325.219 692.882H269.583C385.627 801.038 510.803 894.438 641.905 974.183H575.142C631.775 1008.63 689.513 1040.52 748.066 1070L901.975 916.487H901.983ZM1265.81 553.592C1126.71 492.854 991.742 418.502 863.796 329.986H919.432C811.655 255.412 708.841 170.833 612.785 75.822C603.702 66.8364 594.726 57.7767 585.824 48.6842H630.333C543.277 -40.2189 464.753 -134.326 394.726 -232.617H428.108C363.645 -323.099 306.41 -417.124 256.346 -513.919H278.6C231.265 -605.444 190.317 -699.42 155.848 -795.22L127.84 -767.285C151.009 -681.621 179.149 -597.018 212.209 -513.919H189.954C228.157 -417.896 272.996 -323.913 324.395 -232.617H291.013C345.693 -135.51 407.79 -41.452 477.397 48.6842H432.888C496.354 130.854 566.01 209.793 641.88 284.835C657.409 300.192 673.176 315.18 689.059 329.978H633.424C749.467 438.134 874.643 531.534 1005.75 611.279H938.983C995.616 645.725 1053.35 677.615 1111.91 707.096L1265.81 553.583V553.592ZM1083.9 735.04C944.793 674.302 809.826 599.95 681.88 511.434H737.516C629.739 436.86 526.925 352.281 430.869 257.27C421.786 248.284 412.81 239.225 403.908 230.132H448.417C361.361 141.229 282.837 47.1221 212.81 -51.1694H246.192C181.729 -141.651 124.494 -235.676 74.4301 -332.471H96.6844C49.3488 -423.996 8.401 -517.972 -26.0683 -613.772L-54.0757 -585.837C-30.9066 -500.173 -2.76733 -415.57 30.2926 -332.471H8.03833C46.2414 -236.448 91.0796 -142.465 142.479 -51.1694H109.097C163.777 45.9382 225.874 139.996 295.481 230.132H250.972C314.438 312.302 384.094 391.241 459.964 466.283C475.493 481.641 491.26 496.627 507.143 511.425H451.508C567.551 619.582 692.727 712.982 823.829 792.727H757.067C813.699 827.173 871.437 859.063 929.99 888.544L1083.9 735.031V735.04Z"
        fill="url(#svg-gradient-var)"
      ></path>
    </svg>
  );
};
