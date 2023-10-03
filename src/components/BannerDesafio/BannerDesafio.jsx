import BannerDesafioImg from '/LP-banner23.svg'
import S from './BannerDesafio.module.css'
const BannerDesafio = () => {
  return (
    <div className={S.container}>
      <img src={BannerDesafioImg} alt="Mulher sentada preocupada com as contas" />
      <section className={S.textContainer}>
        <h1 className={S.title}>O desafio Financeiro</h1>
          <p className={S.firstText}>Sabemos que lidar com finanças pode ser um desafio para muitas pessoas.</p>
          <p className={S.secondText}>  A falta de organização, o desconhecimento das despesas e o medo de não conseguir atingir suas metas financeiras são obstáculos comuns enfrentados por todos nós. </p>
          <p className={S.thirdText}>É por isso que desenvolvemos o Finanças+ - para ajudá-lo a superar esses desafios e alcançar a liberdade financeira que você tanto deseja.</p>
      </section>
    </div>
  )
}

export default BannerDesafio