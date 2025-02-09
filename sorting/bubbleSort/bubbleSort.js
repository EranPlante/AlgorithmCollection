function bubbleSort(arr) {
    let len = arr.length;
    for (let i = 0; i < len - 1; i++) {
        for (let j = 0; j < len - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                // 要素をスワップ
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}

// 動作確認
if (require.main === module) {
    const array = [5, 3, 8, 4, 2];
    console.log("Before sorting:", array);
    console.log("After sorting:", bubbleSort(array));
}

// エクスポート（他のファイルからも使えるように）
module.exports = bubbleSort;
