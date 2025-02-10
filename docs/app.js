async function main() {
  async function handleCC(event) {
    event.preventDefault();

    const spinner = document.createElement("div");
    spinner.classList.add("spinner-border");
    document.querySelector("#box").appendChild(spinner);

    const formData = new FormData(document.querySelector("#ccForm"));
    const text = formData.get("text");
    const url = "http://127.0.0.1:3000";
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify({
        text,
      }),
      // 설정 꼭 하기
      headers: { "Content-Type": "application/json" },
    });
    const json = await response.json();
    spinner.remove();
    // document.querySelector("#box").textContent = JSON.stringify(json);

    // server로 url, 내용을 던져주는 걸 구조분해 할당
    const { image, desc } = json;
    const box = document.querySelector("#box");
    box.innerText = "";
    const imageTag = document.createElement("img");
    imageTag.classList.add("img-fluid");
    imageTag.src = image;

    const descTag = document.createElement("p");
    descTag.textContent = desc;

    box.appendChild(imageTag);
    box.appendChild(descTag);
  }
  document.querySelector("#ccForm").addEventListener("submit", handleCC);
}

document.addEventListener("DOMContentLoaded", main);
