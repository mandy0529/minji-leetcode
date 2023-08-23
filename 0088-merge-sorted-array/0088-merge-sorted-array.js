/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    // nums1 배열에 nums2 배열의 원소를 병합하는 역할
    // splice() 메서드를 사용하여 m 위치부터 n 개의 원소를 nums2 배열의 원소로 대체
    // 여기서 ...nums2는 nums2 배열의 원소들을 전개하여 개별 원소로 확장하는 역할 
    // 따라서 nums1 배열의 m 위치부터 n 개의 원소가 nums2 배열의 원소로 대체
    nums1.splice(m, n, ...nums2);

    // nums1 배열을 오름차순으로 정렬, m length만큼 끊기
    nums1.sort((a, b) => a - b).slice(0, m);
    
};
