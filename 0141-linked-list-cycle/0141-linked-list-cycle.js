/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    if(!head || !head.next) {
        return false
    }
    
    let slow = head; // 느린 포인터
    let fast = head; // 빠른 포인터
    
    while (fast && fast.next) {
        slow = slow.next; // 느린 포인터는 한 번 이동
        fast = fast.next.next; // 빠른 포인터는 두 번 이동

        if (slow === fast) {
            return true; // 느린 포인터와 빠른 포인터가 만나면 순환 있음
        }
    }
    
    return false
};