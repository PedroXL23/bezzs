import styles from './Home.module.css';

const Card = ({ nome, posicao, titulo, horarios, informacoes }) => (
  <div className={styles.card}>
    <div className={styles["card-header"]}>
      <div className={styles.avatar}>A</div>
      <div>
        <h3>{nome}</h3>
        <p>{posicao}</p>
      </div>
      <div className={styles.menu}>...</div>
    </div>
    <div className={styles["card-body"]}>
      <h4>{titulo}</h4>
      <p>{horarios}</p>
      <p>{informacoes}</p>
    </div>
  </div>
);

export default function Home() {
  const cards = new Array(9).fill({
    nome: "Nome",
    posicao: "Posição",
    titulo: "Título",
    horarios: "Horários",
    informacoes: "Informações gerais",
  });

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
      <main className={styles.grid}>
        {cards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </main>
    </div>
  );
}
