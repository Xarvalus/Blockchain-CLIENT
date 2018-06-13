import styled from 'styled-components'

const StyledHeader = styled.header`
  & > nav {
    background: #f96332 !important;
  }
  
  .navbar .navbar-nav .nav-item:first-child {
    margin-top: 0 !important;
  }
  
  .navbar .navbar-toggler {
    width: auto;
    height: auto;
  }
  
  @media (min-width: 991px) {
    .dashboard-link {
      margin-left: 50px;
    }
  }
`

export default StyledHeader
