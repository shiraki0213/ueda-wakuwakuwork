document.getElementById('generate-btn').addEventListener('click', function() {
    const messages = [
        "小さいことを重ねることが、とんでもないところに行くただひとつの道（イチロー/元メジャーリーガー）",
        "今日の成果は過去の努力の結果であり、未来はこれからの努力で決まる（稲盛和夫/実業家・京セラなどの創業者）",
        "真剣だからこそ、ぶつかる壁がある（松岡修造/元プロテニスプレイヤー）",
        "考え込んでる時間があったら何かやればいいんだよ。何もしないでいるなんてもったいないよ（所ジョージ）",
        "努力は必ず報われる。もし報われない努力があるのならば、それはまだ努力と呼べない（王貞治）",
        "失敗したからって何なのだ？　失敗から学びを得て、また挑戦すればいいじゃないか。（ウォルト・ディズニー）",
        "プレッシャーや困難なことへの挑戦など、嫌なことは何であれ自分を成長させる機会だと思っている（コービー・ブライアント）",
        "つらい道を避けないこと。自分の目指す場所にたどりつくためには進まなければ。（キャサリン・アン・ポーター／小説家）",
        "焦らない。でも、あきらめない（斎藤茂太／精神科医）",
        "誰よりも三倍、四倍、五倍勉強する者、それが天才だ（野口英世）"
    ];
    const randomIndex = Math.floor(Math.random() * messages.length);
    document.getElementById('message').textContent = messages[randomIndex];
     const colors = ['#f0f8ff', '#ffebcd', '#f5f5dc', '#ffe4e1', '#e6e6fa', '#f0fff0', '#fafad2', '#d3d3d3'];
    const randomColorIndex = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[randomColorIndex];
});
