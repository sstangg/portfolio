export default function HomeAscii() {
    return (
        <>
            <div className="text-2xl h-3/4 w-full block">
                <div className="border-white border-b-4 w-full left-0 text-left flex flex-row">
            <pre className={"p-10 bg-yellow-300"}>
                10101                              0 0        1 1                    <br/>
                10101                            1 0 0      0 1 1                       <br/>
                10101                           1  0 0     0  1 1                         <br/>
                01010                              0 0        1 1            11101       <br/>
                01010                              0 0        1 1         101    10     <br/>
                10101101011            1010011     0 0        1 1       001      111 <br/>
                111101    10        0100100100     0 0        1 1     0001       100  <br/>
                01010	   10      100             0 0        1 1     001        100  <br/>
                01010	   111     100         1   0 0        1 1     001       000   <br/>
                10110	   010     1001      01    0 0        1 1     001     101  <br/>
                01000	   1010     0101010101     0 0        1 1      10000010   <br/>
            </pre>
                    <div className="bg-amber-300 border-white border-l-4 w-full flex flex-col items-center justify-center justify-evenly">
                        <div className="m-4 w-2/3 flex justify-between items-center">
                            <h1  className={"text-6xl"}>H</h1>
                            <h1  className={"text-6xl font-bold"}>E</h1>
                            <h1  className={"text-6xl"}>L</h1>
                            <h1  className={"text-6xl font-bold"}>L</h1>
                            <h1  className={"text-6xl font-bold"}>O</h1>
                        </div>
                        <div className="m-4 w-1/2 flex justify-between items-center">
                            <h1  className={"text-lg"}>H</h1>
                            <h1  className={"text-lg"}>E</h1>
                            <h1  className={"text-lg font-bold"}>L</h1>
                            <h1  className={"text-lg font-bold"}>L</h1>
                            <h1  className={"text-lg font-bold"}>O</h1>
                        </div>
                        <div className="m-4 w-1/3 flex justify-between items-center">
                            <h1  className={"text-sm font-bold"}>H</h1>
                            <h1  className={"text-sm"}>E</h1>
                            <h1  className={"text-sm font-bold"}>L</h1>
                            <h1  className={"text-sm"}>L</h1>
                            <h1  className={"text-sm"}>O</h1>
                        </div>
                        <div className="m-4 w-1/6 flex justify-between items-center">
                            <h1  className={"text-xs font-bold"}>H</h1>
                            <h1  className={"text-xs font-bold"}>E</h1>
                            <h1  className={"text-xs"}>L</h1>
                            <h1  className={"text-xs"}>L</h1>
                            <h1  className={"text-xs font-bold"}>O</h1>
                        </div>
                    </div>
                </div>

                <div className="w-full flex flex-row">
                    <div className="bg-amber-500 border-yellow-100 border-r-4 flex w-full justify-evenly items-center">
                        <h1 className={"text-9xl"}>T</h1>
                        <h1 className={"text-6xl font-bold"}>H</h1>
                        <h1 className={"text-5xl"}>E</h1>
                        <h1 className={"text-7xl"}>R</h1>
                        <h1 className={"text-4xl"}>E</h1>
                        <h1 className={"text-7xl"}>!</h1>
                    </div>
                    <pre className={"p-10 bg-amber-400 text-gray-50"}>
                    10             110                                                            11  <br/>
                    01             110                                                            11  <br/>
                    101            101                                                            11  <br/>
                    110001110      101                             11                             11  <br/>
                    1011           1111              10100111       0110111       01001110        11  <br/>
                    1010           100101101       01001001001      00    11     1001001001       11  <br/>
                    0100      1    1101    01      000              11         000                11  <br/>
                    10100   00     1101    10      001         1    11         000          1         <br/>
                    101010100      1010    010     1100       01    11         1100       01      0   <br/>
                    0101001        1001    00111    0010000101     1110          0100100100      000  <br/>
            </pre>
                </div>
            </div>
        </>
    )
}