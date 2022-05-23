import React from "react";

    // id: string;
   type laptoP={
   model: string;
    year: number;
    operating: string;
    height: number;
    width: number;
    price: number;
  }[]
type DataProps = {
    Data:laptoP
};

export const Table = (props: DataProps) => {
  const { Data } = props;
  return (
    <div>
      
      <table
        style={{ borderCollapse: "collapse", width: "80%", margin: "auto" }}
      >
        <tbody>
          <tr>
            {/* <th >ID</th> */}
            <th >
              Model
            </th>
            <th >
              Manufaturing Year
            </th>
            <th >
              Operating System
            </th>
            <th >
              Screen Height
            </th>
            <th >
              Screen Width
            </th>
            <th >
              Price (₹)
            </th>
          </tr>
          {Data.map((item) => {
            return (
              <tr>
                {/* <td >
                  {item.id}
                </td> */}
                <td >
                  {item.model}
                </td>
                <td >
                  {item.year}
                </td>
                <td >
                  {item.operating}
                </td>
                <td >
                  {item.height}
                </td>
                <td >
                  {item.width}
                </td>
                <td >
                  ₹ {item.price}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
