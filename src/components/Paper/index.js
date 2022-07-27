export default function Paper({ children }) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: 460,
        margin: 'auto',
        background: '#f6f5f3',
        padding: 10,
        marginTop: 10,
      }}
    >
      {children}
    </div>
  );
}
