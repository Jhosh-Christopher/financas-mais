import S from "./BannerBemVindo.module.css"
import BemVindoimg from "/LP-banner11.svg"
const BannerBemVindo = () => {
  return (
    <div className={S.container}>
        <section className={S.containerTexts}>
            <h2 className={S.subtitle}>Bem-vindo ao Finanças+</h2>
            <p className={S.firstText}>O seu aliado para uma gestão financeira bem-sucedida e a realização dos seus objetivos financeiros.</p>
            <p className={S.secondText}>Nosso aplicativo foi projetado para proporcionar a você o controle total sobre suas finanças pessoais, tornando o processo de gerenciar suas receitas, despesas e metas financeiras uma tarefa simples e prazerosa.</p>
        </section>
        <img src={BemVindoimg} alt="mulher de sucesso em cima de uma pilha de moedas" />
    </div>
  )
}

export default BannerBemVindo