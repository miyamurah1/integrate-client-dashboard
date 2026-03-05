export default function Reservations() {
  const reservations = [
    { id: "R-1001", guest: "Alex Trie",      room: "S-01",  type: "Single", checkIn: "Jan 5",  checkOut: "Jan 8",  nights: 3, amount: "$82.50",   status: "checkin",  color: "#7c5cfc" },
    { id: "R-1002", guest: "Kris Black",     room: "De-02", type: "Deluxe", checkIn: "Jan 7",  checkOut: "Jan 10", nights: 3, amount: "$750.00",  status: "checkin",  color: "#3b82f6" },
    { id: "R-1003", guest: "Annette Black",  room: "T-05",  type: "Twin",   checkIn: "Jan 8",  checkOut: "Jan 9",  nights: 1, amount: "$210.00",  status: "checkout", color: "#f59e0b" },
    { id: "R-1004", guest: "Jerome Bell",    room: "K-11",  type: "King",   checkIn: "Jan 9",  checkOut: "Jan 12", nights: 3, amount: "$430.00",  status: "checkin",  color: "#22c55e" },
    { id: "R-1005", guest: "Joanna Bell",    room: "S-03",  type: "Single", checkIn: "Jan 10", checkOut: "Jan 11", nights: 1, amount: "$95.00",   status: "checkout", color: "#ec4899" },
    { id: "R-1006", guest: "Jenny Wilson",   room: "De-04", type: "Deluxe", checkIn: "Jan 11", checkOut: "Jan 15", nights: 4, amount: "$1000.00", status: "checkin",  color: "#a78bfa" },
    { id: "R-1007", guest: "Kristin Watson", room: "T-07",  type: "Twin",   checkIn: "Jan 12", checkOut: "Jan 13", nights: 1, amount: "$175.00",  status: "checkout", color: "#f97316" },
    { id: "R-1008", guest: "Cameron Diaz",   room: "K-02",  type: "King",   checkIn: "Jan 13", checkOut: "Jan 16", nights: 3, amount: "$540.00",  status: "checkin",  color: "#06b6d4" },
  ];

  return (
    <div>
      <div className="page-header">
        <h1>Reservations</h1>
        <p>Track and manage all room reservations</p>
      </div>
      <div className="grid-4" style={{ marginBottom: 24 }}>
        {[
          { label: "Total Reservations", value: "455",  change: "+9%",  dir: "up" },
          { label: "Active Bookings",    value: "74",   change: "+5%",  dir: "up" },
          { label: "Check-outs Today",   value: "12",   change: "-2%",  dir: "down" },
          { label: "Revenue (Month)",    value: "$48K", change: "+14%", dir: "up" },
        ].map((s) => (
          <div key={s.label} className="card stat-card">
            <span className="label">{s.label}</span>
            <span className="value">{s.value}</span>
            <span className={`change ${s.dir}`}>{s.dir === "up" ? "▲" : "▼"} {s.change}</span>
          </div>
        ))}
      </div>
      <div className="card">
        <div className="section-title">All Reservations</div>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Booking ID</th><th>Guest</th><th>Room</th><th>Type</th>
                <th>Check In</th><th>Check Out</th><th>Nights</th><th>Amount</th><th>Status</th>
              </tr>
            </thead>
            <tbody>
              {reservations.map((r) => (
                <tr key={r.id}>
                  <td style={{ color: "#a78bfa", fontWeight: 600 }}>{r.id}</td>
                  <td>
                    <div className="flex items-center gap-8">
                      <div className="avatar" style={{ background: r.color }}>{r.guest[0]}</div>
                      {r.guest}
                    </div>
                  </td>
                  <td style={{ fontWeight: 600 }}>{r.room}</td>
                  <td>{r.type}</td>
                  <td>{r.checkIn}</td>
                  <td>{r.checkOut}</td>
                  <td>{r.nights}</td>
                  <td style={{ fontWeight: 700 }}>{r.amount}</td>
                  <td><span className={`badge ${r.status}`}>{r.status === "checkin" ? "Check-in" : "Check-out"}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}