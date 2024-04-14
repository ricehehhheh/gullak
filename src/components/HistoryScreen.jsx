import React from "react";

const HistoryScreen = () => {
  const data = [
    {
      id: 1,
      username: "Raees BHAI",
      transaction_amount: "200",
      status: "borrow",
    },
    {
      id: 2,
      username: "Archit BHAI",
      transaction_amount: "1200",
      status: "paid",
    },
    {
      id: 3,
      username: "Disha BHAI",
      transaction_amount: "5200",
      status: "borrow",
    },
  ];

  return (
    <div
      style={{
        flex: 1,
        flexDirection: "column",
        margin: 40

      }}
    >
      <h1 style={{ fontWeight: "bold", fontSize: 23, marginBottom: 25 }}>
        Transaction History
      </h1>

      <div style={{ flex: 1 }}>
        {data.map((item) => (
          <div
            style={{
              color: "white",
              flexDirection: "row",
              flex: 1,
              display: "flex",
              justifyContent: "space-between",
              marginBottom: 10,
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <div style={{ border: "2px solid #fefefe", borderRadius: 50 }}>
                <img
                  src="src\assets\icons2.png"
                  alt="Logo"
                  style={{ height: 30, resize: "contain" }}
                />
              </div>

              <p style={{ marginLeft: 10, fontSize: 15 }}>{item.username}</p>
            </div>

            <div>
              <p>{item.status}</p>
            </div>

            <div>
              <p style={{ color: item.status === "borrow" ? "#f51511" : "#0ff74d", fontWeight: 'bold' }}>
                {item.transaction_amount}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HistoryScreen;
