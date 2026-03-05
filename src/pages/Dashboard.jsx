import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import "./Dashboard.css";

const categoryData = [
  { name: "Double room", value: 56, color: "#3a3a50" },
  { name: "Single room", value: 30, color: "#7c5cfc" },
  { name: "Deluxe room", value: 14, color: "#a78bfa" },
];

const bookingData = [
  { month: "Jan", bookings: 455 },
  { month: "Feb", bookings: 409 },
  { month: "Mar", bookings: 222 },
];

const calendarGuests = [
  { id: 1, name: "Kris Black",     color: "#7c5cfc", start: 1, end: 3, row: 0 },
  { id: 2, name: "Alex Trie",      color: "#3b82f6", start: 1, end: 3, row: 1 },
  { id: 3, name: "Annette Black",  color: "#f59e0b", start: 3, end: 5, row: 1 },
  { id: 4, name: "Jerome Bell",    color: "#22c55e", start: 4, end: 6, row: 2 },
  { id: 5, name: "Kris Block",     color: "#7c5cfc", start: 2, end: 4, row: 3 },
  { id: 6, name: "Joanna Bell",    color: "#3b82f6", start: 1, end: 3, row: 4 },
  { id: 7, name: "Jenny Wilson",   color: "#22c55e", start: 4, end: 6, row: 4 },
  { id: 8, name: "Kristin Watson", color: "#f59e0b", start: 2, end: 5, row: 5 },
];

const days = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun","Mon","Tue","Wed","Thu","Fri","Sat","Sun","Mon"];
const dayNums = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

export default function Dashboard() {
  return (
    <div className="dashboard">
      <div className="page-header">
        <h1>Dashboard</h1>
        <p>Welcome back — here's what's happening today.</p>
      </div>

      <div className="dash-top">
        <div className="card category-card">
          <div className="card-row">
            <span className="section-title" style={{marginBottom:0}}>Top category</span>
            <select className="select-sm"><option>Weekly</option><option>Monthly</option></select>
          </div>
          <div className="donut-wrap">
            <PieChart width={160} height={160}>
              <Pie data={categoryData} cx={75} cy={75} innerRadius={48} outerRadius={72} dataKey="value" startAngle={90} endAngle={-270}>
                {categoryData.map((e, i) => <Cell key={i} fill={e.color} stroke="none" />)}
              </Pie>
            </PieChart>
            <div className="donut-center"><span className="donut-pct">56%</span></div>
          </div>
          <div className="legend">
            {categoryData.map((d, i) => (
              <div key={i} className="legend-item">
                <span className="legend-dot" style={{ background: d.color }} />
                <span className="legend-label">{d.name}</span>
                <span className="legend-val">{d.value}%</span>
              </div>
            ))}
          </div>
        </div>

        <div className="card calendar-card">
          <div className="card-row">
            <span className="section-title" style={{marginBottom:0}}>January 2025</span>
          </div>
          <div className="cal-header">
            {dayNums.map((n, i) => (
              <div key={i} className={`cal-day ${n === 9 ? "today" : ""}`}>
                <span className="cal-d">{days[i]}</span>
                <span className="cal-n">{n}</span>
              </div>
            ))}
          </div>
          <div className="cal-body">
            {calendarGuests.map((g) => (
              <div key={g.id} className="cal-event"
                style={{ gridColumn: `${g.start} / ${g.end + 1}`, gridRow: g.row + 1, background: g.color }}>
                {g.name}
              </div>
            ))}
          </div>
          <div className="cal-footer">
            <div className="cal-stat">
              <span className="cal-stat-val">85% <span className="up">+5%</span></span>
              <span className="cal-stat-label">Active bookings</span>
              <span className="cal-sub">Compared to (1.14 last month)</span>
            </div>
            <div className="cal-stat">
              <span className="cal-stat-val">65% <span className="down">-10%</span></span>
              <span className="cal-stat-label">Room occupancy</span>
              <span className="cal-sub">Compared to (75% last month)</span>
            </div>
          </div>
        </div>

        <div className="card room-card">
          <div className="room-img-placeholder">🛋️</div>
          <span className="badge cleaning" style={{display:"inline-flex",marginBottom:12}}>To clean</span>
          <div className="room-name">Velvet Sky</div>
          <div className="room-type">Suite Deluxe</div>
          <div className="room-meta-grid">
            <div><div className="meta-label">Room number</div><div className="meta-val">De-02</div></div>
            <div><div className="meta-label">Room rate</div><div className="meta-val">$250<span style={{fontSize:11,color:"var(--muted)"}}>/night</span></div></div>
            <div><div className="meta-label">Last maintenance</div><div className="meta-val">Jan 3, 2025</div></div>
          </div>
          <button className="room-btn">Room details ↗</button>
        </div>
      </div>

      <div className="dash-bottom">
        <div className="card order-card">
          <div className="card-row">
            <span className="section-title" style={{marginBottom:0}}>Recent order</span>
            <span className="badge new">New</span>
          </div>
          <div className="order-guest">Alex Trie</div>
          <div className="order-meta">
            <span>Order #209231</span><span>Room S-01</span><span>$27.50</span>
          </div>
          <div className="order-items">
            <div className="order-item">🐟 Grilled salmon with vegetables <span>1x</span></div>
            <div className="order-item">🥗 Garden salad <span>1x</span></div>
            <div className="order-item more">+2 more items</div>
          </div>
          <div className="order-notes">
            <span className="meta-label">Order Notes</span>
            <p>No dressing on the salad.</p>
          </div>
          <button className="room-btn">Order details ↗</button>
        </div>

        <div className="card booking-card">
          <div className="card-row">
            <span className="section-title" style={{marginBottom:0}}>Booking</span>
            <select className="select-sm"><option>Quantity</option></select>
          </div>
          <div className="booking-nums">
            {bookingData.map((b) => <span key={b.month} className="booking-num">{b.bookings}</span>)}
          </div>
          <ResponsiveContainer width="100%" height={120}>
            <BarChart data={bookingData} barSize={28}>
              <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: "#8888aa", fontSize: 12 }} />
              <YAxis hide />
              <Tooltip contentStyle={{ background: "#1e1e28", border: "1px solid #2a2a38", borderRadius: 8, color: "#f0f0f8", fontSize: 12 }} cursor={{ fill: "rgba(124,92,252,0.08)" }} />
              <Bar dataKey="bookings" radius={[6,6,0,0]}>
                {bookingData.map((_, i) => <Cell key={i} fill={["#7c5cfc","#ec4899","#a78bfa"][i]} />)}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
