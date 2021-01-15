import styled from 'styled-components'

const RingBox = styled.div`
  position: relative;
  width: ${props => props.boxSize}px;
  height: ${props => props.boxSize}px;
`

const InnerRing = styled.circle`
  position: absolute;
  stroke: #878787;
  stroke-linecap: round;
  stroke-width: 2;
`
const OuterRing = styled.circle`
  position: absolute;
  stroke: ${props => props.ringColor};
  stroke-linecap: round;
`

const Glow = styled.circle`
  position: absolute;
  stroke: ${props => props.ringColor};
  stroke-linecap: round;
  filter: 'url(#blur)';
  opacity: 1;
`

const ProgressRing = (props) => {
    const { radius, stroke, progress, color } = props
    const normalizedRadius = radius - stroke * 2
    const circumference = normalizedRadius * 2 * Math.PI
    const strokeDashoffset = circumference - progress / 100 * circumference
    const fullRing = circumference - 100 / 100 * circumference

    return (
      <RingBox boxSize={radius * 2}>
        <svg
          height={radius * 2}
          width={radius * 2}
        >
          <InnerRing
            fill="transparent"
            strokeDasharray={ circumference + ' ' + circumference }
            style={ { fullRing } }
            stroke-width={ 2 }
            r={ normalizedRadius }
            cx={ radius }
            cy={ radius }
          />
          <filter id="blur" x="-50%" y="-50%" 
              width="240%" 
              height="240%">
            <feGaussianBlur 
              in="SourceGraphic" 
              stdDeviation="10"
             />
          </filter>
          <Glow
            filter="url(#blur)"
            ringColor={color}
            stroke-linecap="round"
            stroke-linejoin="round"
            fill="transparent"
            strokeWidth={ stroke - 2 }
            strokeDasharray={ circumference + ' ' + circumference }
            style={ { strokeDashoffset } }
            stroke-width={ stroke }
            r={ normalizedRadius }
            cx={ radius }
            cy={ radius }
          />
          <OuterRing
            ringColor={color}
            stroke-linecap="round"
            stroke-linejoin="round"
            fill="transparent"
            strokeWidth={ stroke }
            strokeDasharray={ circumference + ' ' + circumference }
            style={ { strokeDashoffset } }
            stroke-width={ stroke }
            r={ normalizedRadius }
            cx={ radius }
            cy={ radius }
          />
        </svg>
      </RingBox>
    )
}

export default ProgressRing