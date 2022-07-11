import styled from 'styled-components'

import { AppleBadge4X, PlayStore2X, Triple2X } from 'assets/images'
import CountUp from 'components/common/CountUp'
import { AnimationWrapper } from 'styles/mixins/animation'

const Wrapper = styled.div`
  position: relative;
  height: auto;
`

const ContentLogoContainer = styled.div`
  position: absolute;
  top: 150px;
  width: 400px;
  height: 338px;
  background-size: 400px 338px;
  padding-top: 280px;
  font-size: 15px;
  box-sizing: border-box;
  background-image: url(${Triple2X});
  background-repeat: no-repeat;
  text-align: center;
  font-family: sans-serif;
  color: rgba(58, 58, 58, 0.7);
`

const MetricsContainer = styled.div`
  margin-left: 623px;
  padding-top: 150px;
`

const MetricsItem = styled.div`
  font-size: 36px;
  letter-spacing: -1px;
  margin-bottom: 20px;
  color: rgb(58, 58, 58);
  font-family: sans-serif;
`

const AwardsContainer = styled.div`
  margin: 50px 0px 140px 623px;
`

interface AwardsItemProps {
  readonly imageurl: string
}

const AwardsItem = styled.div<AwardsItemProps>`
  background-size: 54px 54px;
  height: 54px;
  padding: 5px 0px 5px 62px;
  font-size: 14px;
  line-height: 22px;
  margin-right: 39px;
  display: inline-block;
  font-family: sans-serif;
  background-image: url(${(props) => props.imageurl});
  background-position: left top;
  background-repeat: no-repeat;
  color: rgba(58, 58, 58, 0.8);
  font-weight: bold;
`

function Original(): JSX.Element {
  return (
    <Wrapper>
      <AnimationWrapper type="fadeInUp" duration={0.7}>
        <ContentLogoContainer>2021년 12월 기준</ContentLogoContainer>
      </AnimationWrapper>
      <AnimationWrapper type="fadeInUp" duration={0.7} delay={0.1}>
        <MetricsContainer>
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
        </MetricsContainer>
      </AnimationWrapper>
      <AnimationWrapper type="fadeInUp" duration={0.7} delay={0.2}>
        <AwardsContainer>
          <AwardsItem imageurl={PlayStore2X}>
            2018 구글 플레이스토어
            <br />
            올해의 앱 최우수상 수상
          </AwardsItem>
          <AwardsItem imageurl={AppleBadge4X}>
            2018 애플 앱스토어
            <br />
            오늘의 여행앱 선정
          </AwardsItem>
        </AwardsContainer>
      </AnimationWrapper>
    </Wrapper>
  )
}

export default Original
