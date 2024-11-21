import styled from "styled-components"

const TitlePage = ({ title }) => {
  return (
    <Wrap>{title}</Wrap>
  )
}

const Wrap = styled.div`
  width: 100%;
  padding: 5px 0px;
  font-size: 14px;
  text-transform: uppercase;
  text-decoration: underline;
`

export default TitlePage