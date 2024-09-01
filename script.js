document.getElementById('generate-btn').addEventListener('click', function() {
    const messages = [
        "今日は素晴らしい日になるでしょう！",
        "あなたはそのままで十分素敵です！",
        "あなたの笑顔は周りの人を幸せにします。",
        "今日もあなたは頑張っている！",
        "あなたの努力は必ず報われます。",
        "あなたには無限の可能性があります！",
        "新しい挑戦を恐れず、楽しんでください！",
        "あなたはどんな困難も乗り越えられる力を持っています。",
        "あなたの存在はとても貴重です。",
        "どんな時も自分を信じてください！"
    ];
    const randomIndex = Math.floor(Math.random() * messages.length);
    document.getElementById('message').textContent = messages[randomIndex];
});
