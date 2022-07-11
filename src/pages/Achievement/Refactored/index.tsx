import styled from 'styled-components'

import { AppleBadge4X, PlayStore2X, Triple2X } from 'assets/images'
import CountUp from 'components/common/CountUp'
import { textStyle } from 'styles/mixins/typography'
import { gray50 } from 'styles/constants/colors'
import { AnimationWrapper } from 'styles/mixins/animation'

const Wrapper = styled.section`
  display: grid;
  grid-template-areas:
    'a b'
    'a c'
    'a c'
    'a c';
  column-gap: 100px;
`

const ContentLogoContainer = styled.figure`
  position: relative;
  grid-area: a;
`
const ContentLogoImage = styled.img`
  width: 400px;
`
const ContentLogoCaption = styled.figcaption`
  position: absolute;
  top: 280px;
  left: 200px;
  transform: translateX(-50%);
  ${textStyle(15)};
  color: rgba(${gray50}, 0.7);
`

const MetricsContainer = styled.ul`
  grid-area: b;
`

const MetricsItem = styled.li`
  ${textStyle(36, undefined, -1)};
  margin-bottom: 20px;
  color: ${gray50};
`

const AwardsContainer = styled.ul`
  grid-area: c;
`

const AwardsItem = styled.li`
  display: inline-flex;
  align-items: center;
  margin-right: 39px;
  ${textStyle(14, 22, -1, 'bold')};
  color: rgba(${gray50}, 0.8);
`

const AwardsLogoImage = styled.img`
  width: 54px;
  margin-right: 8px;
`

function Refactored(): JSX.Element {
  return (
    <Wrapper>
      <ContentLogoContainer>
        <AnimationWrapper type="fadeInUp" duration={0.7}>
          <ContentLogoImage src={Triple2X} alt="Content Logo" />
          <ContentLogoCaption>2021년 12월 기준</ContentLogoCaption>
        </AnimationWrapper>
      </ContentLogoContainer>
      <MetricsContainer>
        <AnimationWrapper type="fadeInUp" duration={0.7} delay={0.1}>
          <MetricsItem>
            <strong>
              <CountUp start={0} end={700} duration={2} />만 명
            </strong>
            의 여행자
          </MetricsItem>
          <MetricsItem>
            <strong>
              <CountUp start={0} end={100} duration={2} />만 개
            </strong>
            의 여행 리뷰
          </MetricsItem>
          <MetricsItem>
            <strong>
              <CountUp start={0} end={470} duration={2} />만 개
            </strong>
            의 여행 일정
          </MetricsItem>
        </AnimationWrapper>
      </MetricsContainer>
      <AwardsContainer>
        <AnimationWrapper type="fadeInUp" duration={0.7} delay={0.2}>
          <AwardsItem>
            <AwardsLogoImage src={PlayStore2X} />
            2018 구글 플레이스토어
            <br />
            올해의 앱 최우수상 수상
          </AwardsItem>
          <AwardsItem>
            <AwardsLogoImage src={AppleBadge4X} />
            2018 애플 앱스토어
            <br />
            오늘의 여행앱 선정
          </AwardsItem>
        </AnimationWrapper>
      </AwardsContainer>
    </Wrapper>
  )
}

export default Refactored
