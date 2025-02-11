// 画像情報をidで管理
const images = [
    {src:'images/YumigetaA.jpg',caption:'弓桁朱琴', id: 1, color: '#D32D3B' },
    { src: 'images/MakinoM.jpg', caption: '牧野真莉愛', id: 2, color: '#EDA4C6' },
    { src: 'images/OdaS.jpg', caption: '小田さくら', id: 3, color: '#D7B3E1' },
    { src: 'images/NonakaM.jpg', caption: '野中美希', id: 3, color: '#9A4FB7' },
    { src: 'images/KitagawaR.jpg', caption: '北川莉央', id: 4, color: '#6EB9E7' },
    { src: 'images/IkutaE.jpg', caption: '生田衣梨奈', id: 5, color: '#CCFD9F' },
    { src: 'images/InoueH.jpg', caption: '井上春華', id: 5, color: '#7BD39A' },
    { src: 'images/YamazakiM.jpg', caption: '山﨑愛生', id: 5, color: '#49A362' },
    { src: 'images/SakuraiR.jpg', caption: '櫻井梨央', id: 6, color: '#EBE3C5' },
    { src: 'images/OkamuraH.jpg', caption: '岡村ほまれ', id: 7, color: '#F1FF66' },
    { src: 'images/YokoyamaR.jpg', caption: '横山玲奈', id: 7, color: '#F9DB49' },
    { src: 'images/HagaA.jpg', caption: '羽賀朱音', id: 7, color: '#F2A63B' },
    { src: 'images/HashisakoR.jpg', caption: '橋迫鈴', id: 8, color: '#D32D3B' },
    { src: 'images/ShimoitaniY.jpg', caption: '下井谷幸穂', id: 9, color: '#D66C9C' },
    { src: 'images/TamenagaS.jpg', caption: '為永幸音', id: 9, color: '#EDA4C6' },
    { src: 'images/GotoH.jpg', caption: '後藤花', id: 11, color: '#6EB9E7' },
    { src: 'images/KamikokuryoM.jpg', caption: '上國料萌衣', id: 11, color: '#98F9EA' },
    { src: 'images/HirayamaY.jpg', caption: '平山遊季', id: 12, color: '#CCFD9F' },
    { src: 'images/KawanaR.jpg', caption: '川名凛', id: 12, color: '#49A362' },
    { src: 'images/MatsumotoW.jpg', caption: '松本わかな', id: 13, color: '#F7F7F7' },
    { src: 'images/IseR.jpg', caption: '伊勢鈴蘭', id: 14, color: '#F2A63B' },
    { src: 'images/KawashimaM.jpg', caption: '川嶋美楓', id: 15, color: '#D32D3B' },
    { src: 'images/KudoY.jpg', caption: '工藤由愛', id: 16, color: '#EDA4C6' },
    { src: 'images/IrieR.jpg', caption: '入江里咲', id: 17, color: '#D7B3E1' },
    { src: 'images/IshiyamaS.jpg', caption: '石山咲良', id: 17, color: '#9A4FB7' },
    { src: 'images/MatsunagaR.jpg', caption: '松永里愛', id: 18, color: '#204FCD' },
    { src: 'images/ArisawaI.jpg', caption: '有澤一華', id: 18, color: '#6EB9E7' },
    { src: 'images/EndoA.jpg', caption: '遠藤彩加里', id: 19, color: '#7BD39A' },
    { src: 'images/InoueR.jpg', caption: '井上玲音', id: 20, color: '#F7F7F7' },
    { src: 'images/EbataK.jpg', caption: '江端妃咲', id: 21, color: '#F1FF66' },
    { src: 'images/DambaraR.jpg', caption: '段原瑠々', id: 21, color: '#F2A63B' },
    { src: 'images/AkiyamaM.jpg', caption: '秋山眞緒', id: 22, color: '#D32D3B' },
    { src: 'images/OnodaS.jpg', caption: '小野田紗栞', id: 23, color: '#EDA4C6' },
    { src: 'images/MurataY.jpg', caption: '村田結生', id: 23, color: '#F8D5E6' },
    { src: 'images/TanimotoA.jpg', caption: '谷本安美', id: 24, color: '#D7B3E1' },
    { src: 'images/KasaiY.jpg', caption: '河西結心', id: 24, color: '#9A4FB7' },
    { src: 'images/FukudaM.jpg', caption: '福田真琳', id: 25, color: '#204FCD' },
    { src: 'images/OnoM.jpg', caption: '小野瑞歩', id: 26, color: '#55B496' },
    { src: 'images/DoiH.jpg', caption: '土居楓奏', id: 26, color: '#49A362' },
    { src: 'images/IshiiM.jpg', caption: '石井泉羽', id: 27, color: '#F7F7F7' },
    { src: 'images/YohuR.jpg', caption: '豫風瑠乃', id: 28, color: '#F9DB49' },
    { src: 'images/YagiS.jpg', caption: '八木栞', id: 28, color: '#F2A63B' },
    { src: 'images/NishidaS.jpg', caption: '西田汐里', id: 30, color: '#D66C9C' },
    { src: 'images/OkamuraM.jpg', caption: '岡村美波', id: 30, color: '#EDA4C6' },
    { src: 'images/ShimakuraR.jpg', caption: '島倉りか', id: 31, color: '#D7B3E1' },
    { src: 'images/HiraiM.jpg', caption: '平井美葉', id: 31, color: '#9A4FB7' },
    { src: 'images/SatoyoshiU.jpg', caption: '里吉うたの', id: 32, color: '#204FCD' },
    { src: 'images/MaedaK.jpg', caption: '前田こころ', id: 32, color: '#6EB9E7' },
    { src: 'images/TakaseK.jpg', caption: '高瀬くるみ', id: 33, color: '#7BD39A' },
    { src: 'images/KobayashiH.jpg', caption: '小林萌花', id: 33, color: '#49A362' },
    { src: 'images/EguchiS.jpg', caption: '江口紗耶', id: 35, color: '#F1FF66' },
    { src: 'images/KiyonoM.jpg', caption: '清野桃々姫', id: 35, color: '#F2A63B' },
    { src: 'images/YonemuraK.jpg', caption: '米村姫良々', id: 36, color: '#D32D3B' },
    { src: 'images/KubotaN.jpg', caption: '窪田七海', id: 37, color: '#EDA4C6' },
    { src: 'images/TashiroS.jpg', caption: '田代すみれ', id: 38, color: '#D7B3E1' },
    { src: 'images/NishizakiM.jpg', caption: '西﨑美空', id: 38, color: '#9A4FB7' },
    { src: 'images/TsutsuiR.jpg', caption: '筒井澪心', id: 39, color: '#204FCD' },
    { src: 'images/SaitoM.jpg', caption: '斉藤円香', id: 39, color: '#6EB9E7' },
    { src: 'images/KitaharaM.jpg', caption: '北原もも', id: 40, color: '#CCFD9F' },
    { src: 'images/NakayamaN.jpg', caption: '中山夏月姫', id: 41, color: '#F7F7F7' },
    { src: 'images/HiromotoR.jpg', caption: '広本瑠璃', id: 42, color: '#F1FF66' },
    { src: 'images/IshiguriK.jpg', caption: '石栗奏美', id: 42, color: '#F2A63B' },
    { src: 'images/YoshidaH.jpg', caption: '吉田姫杷', id: 43, color: '#D32D3B' },
    { src: 'images/OnodaK.jpg', caption: '小野田華凜', id: 44, color: '#EDA4C6' },
    { src: 'images/MurakoshiA.jpg', caption: '村越彩奈', id: 45, color: '#D7B3E1' },
    { src: 'images/SomaY.jpg', caption: '相馬優芽', id: 46, color: '#204FCD' },
    { src: 'images/MatsubaraY.jpg', caption: '松原ユリヤ', id: 46, color: '#6EB9E7' },
    { src: 'images/ShimakawaH.jpg', caption: '島川波菜', id: 47, color: '#49A362' },
    { src: 'images/HashidaH.jpg', caption: '橋田歩果', id: 48, color: '#F7F7F7' },
    { src: 'images/KamimuraR.jpg', caption: '上村麗菜', id: 49, color: '#F1FF66' },
    { src: 'images/UemuraH.jpg', caption: '植村葉純', id: 49, color: '#F2A63B' }
  ];

// ランダムに画像を選ぶ関数
function getRandomArray(start, end, length) {
    let array = [];
    while (array.length < length) {
        let randomNumber = Math.floor(Math.random() * (end - start + 1)) + start;
        if (!array.includes(randomNumber)) {
            array.push(randomNumber);
        }
    }
    return array;
}

// 禁止されたIDのリスト（例: 10, 29, 34）
const invalidIds = [10, 29, 34];

// ランダムに範囲内の数字を取得する関数
function showRandomImages() {
    // 1～6のランダムな数を7つ取得（商の部分）
    let quotientArray = getRandomArray(0, 6, 7);

    // 1～7のランダムな数を7つ取得（余りの部分）
    let remainderArray = getRandomArray(1, 7, 7);

    // quotientArray × 7 + remainderArray を格納する idArray を作成
    let idArray = quotientArray.map((quotient, index) => quotient * 7 + remainderArray[index]);

    // 表示する画像のインデックスを格納する配列
    let selectedImages = idArray
        .filter(id => !invalidIds.includes(id)) // 禁止IDを除外
        .map(id => {
            // idに対応する画像を選択（もし複数ある場合はランダムに選ぶ）
            const possibleImages = images.filter(image => image.id === id);
            return possibleImages.length > 0
                ? possibleImages[Math.floor(Math.random() * possibleImages.length)]
                : null;
        })
        .filter(image => image !== null); // `null` の要素を除外

    // 画像をHTMLに表示
    const imageContainer = document.getElementById("image-container");
    imageContainer.innerHTML = ""; // 既存の画像をクリア

    selectedImages.forEach(image => {
        const img = document.createElement("img");
        img.src = image.src;
        img.alt = image.caption;

        const caption = document.createElement("p");
        caption.textContent = image.caption;

        const imageDiv = document.createElement("div");
        imageDiv.classList.add("image-container");
        imageDiv.style.backgroundColor = image.color;
        imageDiv.appendChild(img);
        imageDiv.appendChild(caption);

        imageContainer.appendChild(imageDiv);
    });
}

// ボタンクリック時に画像を表示
document.getElementById("random-button").addEventListener("click", showRandomImages);
