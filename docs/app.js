// 화면이 로드 되면 함수 실행
async function main() {
  async function handleCC() {
    // cors 때문에 오류가 난다
    document.querySelector("#box").textContent = await (
      await fetch("http://127.0.0.1:3000")
    ).text();
  }
  document.querySelector("#ccBtn").addEventListener("click", handleCC);
}

document.addEventListener("DOMContentLoaded", main);
