import * as S from './styles'

const currentYear = new Date().getFullYear()

const Footer = () => (
  <S.Container>
    <div className="container">
      <S.FoooterSection>
        <S.SectionTitle>Categorias</S.SectionTitle>
        <S.Links>
          <li>
            <S.Link
              title="Clique aqui para acessar jogos de RPG "
              to="/categories#rpg"
            >
              RPG
            </S.Link>
          </li>
          <li>
            <S.Link
              title="Clique aqui para acessar jogos de ação "
              to="/categories#action"
            >
              Ação
            </S.Link>
          </li>
          <li>
            <S.Link
              title="Clique aqui para acessar jogos de esportes "
              to="/categories#sports"
            >
              Esportes
            </S.Link>
          </li>
          <li>
            <S.Link
              title="Clique aqui para acessar jogos de simulação "
              to="/categories#simulation"
            >
              Simulação
            </S.Link>
          </li>
          <li>
            <S.Link
              title="Clique aqui para acessar jogos de luta "
              to="/categories#fight"
            >
              Luta
            </S.Link>
          </li>
        </S.Links>
      </S.FoooterSection>
      <S.FoooterSection>
        <S.SectionTitle>Acesso rápido</S.SectionTitle>
        <S.Links>
          <li>
            <S.Link
              title="Clique aqui para acessar a seção de promoções"
              to="#on-sale"
            >
              Promoções
            </S.Link>
          </li>
          <li>
            <S.Link
              title="Clique aqui para acessar a seção em breve"
              to="#coming-soon"
            >
              Em breve
            </S.Link>
          </li>
        </S.Links>
      </S.FoooterSection>
      <p>2023 - {currentYear} &copy; E-PLAY Todos os direitos reservados</p>
    </div>
  </S.Container>
)

export default Footer
