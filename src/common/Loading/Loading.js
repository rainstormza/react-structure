import React from 'react'
import MDSpinner from 'react-md-spinner'

const styleLoading = {
  position: 'fixed',
  margin: 'auto',
  top: '0',
  bottom: '0',
  left: '0',
  right: '0',
  zIndex: 101
}

const Loading = () => <MDSpinner size="80" style={styleLoading} />

export default Loading
