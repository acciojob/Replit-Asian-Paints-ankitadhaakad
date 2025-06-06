document.getElementById("change_button").addEventListener("click", function () {
  const blockId = document.getElementById("block_id").value.trim();
  const color = document.getElementById("colour_id").value.trim();

  // Reset all blocks to transparent
  for (let i = 1; i <= 9; i++) {
    document.getElementById(i.toString()).style.backgroundColor = "transparent";
  }

  // Change only the specified block if valid
  if (blockId >= 1 && blockId <= 9) {
    const block = document.getElementById(blockId);
    block.style.backgroundColor = color;
  } else {
    alert("Invalid block ID. Enter a number from 1 to 9.");
  }
});

// Reset all blocks and inputs
document.getElementById("Reset").addEventListener("click", function () {
  for (let i = 1; i <= 9; i++) {
    document.getElementById(i.toString()).style.backgroundColor = "transparent";
  }
  document.getElementById("block_id").value = "";
  document.getElementById("colour_id").value = "";
});
