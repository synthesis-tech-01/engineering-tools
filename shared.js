// export を消して、普通の変数定義にします
const cableList = [
    { sq: "2", amp: 27 }, { sq: "3.5", amp: 37 }, { sq: "5.5", amp: 49 },
    { sq: "8", amp: 61 }, { sq: "14", amp: 88 }, { sq: "22", amp: 115 },
    { sq: "38", amp: 162 }, { sq: "60", amp: 217 }, { sq: "100", amp: 298 },
    { sq: "200", amp: 465 }, { sq: "250", amp: 535 }, { sq: "325", amp: 635 },
    { sq: "400", amp: 725 }, { sq: "500", amp: 838 }, { sq: "600", amp: 950 }
];

/*async function exportToPDF(elementId, fileNameDefault) {
    const element = document.getElementById(elementId).cloneNode(true);
    // ボタンなどはPDFに含めない
    element.querySelectorAll('button').forEach(btn => btn.remove());
    element.querySelectorAll('.btn-back').forEach(nav => nav.remove());

    const opt = {
        margin: [10, 10],
        filename: `${fileNameDefault}_${new Date().getTime()}.pdf`,
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    try {
        await html2pdf().set(opt).from(element).save();
    } catch (error) {
        alert("PDF生成に失敗しました。");
    }
}  */

// shared.js の末尾に追加

// XMLとしてダウンロードする共通関数
function downloadXML(xmlString, fileNameDefault) {
    const blob = new Blob([xmlString], { type: 'text/xml' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = `${fileNameDefault}_${new Date().getTime()}.xml`;
    a.click();
}

// XMLファイルをテキストとして読み込む共通関数
function loadXMLFile(event, callback) {
    const file = event.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(e.target.result, "text/xml");
        callback(xmlDoc); // 解析したXMLを各画面の処理に渡す
    };
    reader.readAsText(file);
}