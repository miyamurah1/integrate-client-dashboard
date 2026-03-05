import { useState } from "react";
import "./Restaurant.css";

export default function Restaurant() {
  const [activeFilter, setActiveFilter] = useState("All");

  const allOrders = [
    { id: "S-01",  guest: "Alex Trie",      status: "new",       total: "$27.50", color: "#7c5cfc",
      items: [{ name: "Grilled salmon with vegetables", qty: 1 }, { name: "Garden salad", qty: 1 }, { name: "Sparkling water", qty: 2 }],
      notes: "No dressing on the salad." },
    { id: "D-08",  guest: "Jerome Bell",    status: "progress",  total: "$31.00", color: "#22c55e",
      items: [{ name: "Beef steak", qty: 1 }, { name: "Mashed potatoes", qty: 1 }],
      notes: "Steak well-done, no gravy on potatoes." },
    { id: "S-22",  guest: "Annette Black",  status: "ready",     total: "$36.50", color: "#f59e0b",
      items: [{ name: "Chicken curry with basmati rice", qty: 1 }, { name: "Gordon salad", qty: 1 }],
      notes: "Mild spice level." },
    { id: "K-14",  guest: "Kristin Watson", status: "new",       total: "$42.00", color: "#ec4899",
      items: [{ name: "Lobster bisque", qty: 1 }, { name: "Cheese platter", qty: 1 }],
      notes: "" },
    { id: "T-03",  guest: "Jenny Wilson",   status: "progress",  total: "$19.50", color: "#a78bfa",
      items: [{ name: "Club sandwich", qty: 1 }, { name: "French fries", qty: 1 }],
      notes: "Extra ketchup please." },
    { id: "De-04", guest: "Cameron Diaz",   status: "cancelled", total: "$55.00", color: "#06b6d4",
      items: [{ name: "Wagyu burger", qty: 1 }, { name: "Truffle fries", qty: 1 }],
      notes: "Cancelled by guest." },
  ];

  const statusLabel = { new: "New", progress: "On progress", ready: "Ready to serve", cancelled: "Cancelled" };
  const filters = ["All", "New", "On progress", "Ready to serve", "Cancelled"];

  const filtered = activeFilter === "All"
    ? allOrders
    : allOrders.filter((o) => statusLabel[o.status] === activeFilter);

  const counts = {
    new:       allOrders.filter((o) => o.status === "new").length,
    progress:  allOrders.filter((o) => o.status === "progress").length,
    ready:     allOrders.filter((o) => o.status === "ready").length,
    cancelled: allOrders.filter((o) => o.status === "cancelled").length,
  };

  return (
    <div>
      <div className="page-header">
        <h1>Restaurant</h1>
        <p>Manage all room service and restaurant orders</p>
      </div>

      <div className="grid-4 rest-stats">
        {[
          { label: "New orders",       value: counts.new,       s: "new" },
          { label: "In progress",      value: counts.progress,  s: "progress" },
          { label: "Ready to serve",   value: counts.ready,     s: "ready" },
          { label: "Cancelled orders", value: counts.cancelled, s: "cancelled" },
        ].map((x) => (
          <div key={x.label} className={`card rest-stat rest-stat-${x.s}`}>
            <span className="rest-stat-num">{x.value}</span>
            <span className="rest-stat-label">{x.label}</span>
          </div>
        ))}
      </div>

      <div className="rest-body">
        <div className="card rest-filters">
          <div className="section-title">Filters</div>
          <div className="filter-label">Order status</div>
          {filters.map((f) => (
            <label key={f} className="filter-item">
              <input type="checkbox" checked={activeFilter === f} onChange={() => setActiveFilter(f)} className="filter-check" />
              {f}
            </label>
          ))}
          <div className="filter-label" style={{ marginTop: 16 }}>Filter by</div>
          {["Recent orders", "Last hour", "Today", "Custom date"].map((f) => (
            <label key={f} className="filter-item">
              <input type="radio" name="time" className="filter-check" defaultChecked={f === "Recent orders"} />
              {f}
            </label>
          ))}
        </div>

        <div className="rest-orders">
          {filtered.map((order) => (
            <div key={order.id} className="card order-card-rest">
              <div className="ocr-header">
                <div className="flex items-center gap-8">
                  <div className="avatar" style={{ background: order.color }}>{order.guest[0]}</div>
                  <div>
                    <div className="ocr-name">{order.guest}</div>
                    <div className="ocr-id">Order #{order.id}</div>
                  </div>
                </div>
                <span className={`badge ${order.status}`}>{statusLabel[order.status]}</span>
              </div>
              <div className="ocr-items">
                {order.items.map((item, i) => (
                  <div key={i} className="ocr-item">
                    <span>{item.name}</span>
                    <span className="ocr-qty">{item.qty}x</span>
                  </div>
                ))}
              </div>
              {order.notes && <div className="ocr-notes">📝 {order.notes}</div>}
              <div className="ocr-footer">
                <span className="ocr-total">{order.total}</span>
                <button className="room-btn" style={{ width: "auto", padding: "7px 14px", fontSize: 12 }}>Order details ↗</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}