//your JS code here. If required.
document.getElementById("change_button").addEventListener("click", function () {
  const blockId = document.getElementById("block_id").value.trim();
  const color = document.getElementById("colour_id").value.trim();

  // Reset all blocks to transparent
  for (let i = 1; i <= 9; i++) {
    document.getElementById(i.toString()).style.backgroundColor = "transparent";
  }

  // Change background color if valid block ID
  if (blockId >= 1 && blockId <= 9) {
    document.getElementById(blockId).style.backgroundColor = color;
  } else {
    alert("Please enter a valid block ID (1-9).");
  }
});

// Reset button handler
document.getElementById("Reset").addEventListener("click", function () {
  for (let i = 1; i <= 9; i++) {
    document.getElementById(i.toString()).style.backgroundColor = "transparent";
  }
  document.getElementById("block_id").value = "";
  document.getElementById("colour_id").value = "";
});

