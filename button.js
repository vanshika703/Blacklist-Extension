let c = 1;
let a = 1;

window.onload = () => {
  const bookings = document.querySelector("body");

  const config = { attributes: true, childList: true, subtree: true };

  const observer = new MutationObserver(() => {
    /*  console.log("change");
    const  dropdown = document.querySelector(".ant-dropdown-menu");
    var li = document.createElement("li");
    var text = document.createTextNode("Blacklist");    
    li.appendChild(text);
    dropdown.appendChild(li); */

    const selec = document.querySelector(".ant-drawer-content-wrapper");

    if (selec) {
      if (
        !(
          Object.values(selec.style).includes("transform") &&
          Object.values(selec.style).includes("translateX(100%)")
        )
      ) {
        console.log("Open");
        // write your conditions
        if (c === 1) {
          c = 2;
          console.log("in");
          setTimeout(() => {
            const h2 = selec.querySelector("h2");
            console.log("h2", h2);
            const icon = document.createElement("button");
            icon.innerText = "HI";
            h2.appendChild(icon);
            const button = selec.querySelector(
              "button.ant-btn.ant-dropdown-trigger"
            );
            console.log(button);
            // button.
            button.addEventListener("mouseover", () => {
              const list = document.querySelector(".ant-dropdown-menu");
              console.log(list);
              if (!list.innerHTML.includes("Blacklist"))
                list.innerHTML =
                  list.innerHTML +
                  '<li class="ant-dropdown-menu-item sc-fZJzSw cypMWg" role="menuitem" aria-disabled="false"><span role="img" aria-label="credit-card" class="anticon anticon-credit-card ant-dropdown-menu-item-icon"><svg viewBox="64 64 896 896" focusable="false" data-icon="credit-card" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-792 72h752v120H136V232zm752 560H136V440h752v352zm-237-64h165c4.4 0 8-3.6 8-8v-72c0-4.4-3.6-8-8-8H651c-4.4 0-8 3.6-8 8v72c0 4.4 3.6 8 8 8z"></path></svg></span><span>Blacklist</span></li>';
            });
          }, 3000);
        } else {
          console.log("out");
        }
      } else {
        console.log("Close");
      }
    }
  });

  observer.observe(bookings, config);
};
