
function TgApp() {
  const app = window.Telegram.WebApp;
  return <>{JSON.stringify(app)}</>;
}

export default TgApp