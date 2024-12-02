import styles from './Layout.module.css';

export default function Layout() {
  const menuItems = [
    { icon: "⚙", text: "Configurações" },
    { icon: "🔔", text: "Notificações" },
    { icon: "⭐", text: "Reviews" },
    { icon: "📞", text: "Contato" },
  ];

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.logo}>P</div>
        <div>
          <h1>Nome</h1>
          <p>Posição</p>
        </div>
        <div className={styles["menu-icon"]}>☰</div>
      </header>
      <ul className={styles.menu}>
        {menuItems.map((item, index) => (
          <li key={index} className={styles["menu-item"]}>
            <span className={styles.icon}>{item.icon}</span>
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
}
