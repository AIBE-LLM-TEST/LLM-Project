async function main() {
  async function handleCC(event) {
    event.preventDefault();

    const spinner = document.createElement("div");
    spinner.classList.add("spinner-border");
    document.querySelector("#box").appendChild(spinner);

    const formData = new FormData(document.querySelector("#ccForm"));
    const text = formData.get("text");
    const url = "https://alder-childish-thursday.glitch.me";
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify({
        text,
      }),
      headers: {
        "Content-Type": "Application/json",
      },
    });
    const json = await response.json();

    // 로딩을 추가했다가 종료시 없애는...
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
