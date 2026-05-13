export default function App() {
  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        background: 'linear-gradient(#4ec0ff, #87ff87)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        color: 'white',
        fontFamily: 'Arial'
      }}
    >
      <h1>PalVerse Mobile</h1>

      <div
        style={{
          width: 200,
          height: 200,
          background: 'green',
          borderRadius: 20,
          marginTop: 20,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 30
        }}
      >
        🌍
      </div>

      <p style={{ marginTop: 20 }}>
        First Mobile World Loaded Successfully
      </p>
    </div>
  )
}
