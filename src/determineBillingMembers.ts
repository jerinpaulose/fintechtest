// determineBillingMembers.ts
import { ClubMember } from './types';

interface BillingInfo {
    billedMembers: ClubMember[];
    dependentChildren: ClubMember[];
    nonDependentMembers: ClubMember[];
}

export function determineBillingMembers(members: ClubMember[]): BillingInfo {
    const billedMembers: ClubMember[] = [];
    const dependentChildren: ClubMember[] = [];
    const nonDependentMembers: ClubMember[] = []; 

    const visited: Set<number> = new Set();

    function dfs(member: ClubMember): void {
        if (visited.has(member.id)) {
            return;
        }

        visited.add(member.id);

        if (member.linkId !== null) {
            const linkedMember = members.find(m => m.id === member.linkId);
            if (linkedMember) {
                if (linkedMember.linkId === null) {
                    billedMembers.push(linkedMember);
                } else {
                    dfs(linkedMember);
                }
            }
        }

        if (member.linkId !== null) {
            dependentChildren.push(member);
        } else {
            nonDependentMembers.push(member); 
    }

    members.forEach(member => {
        if (!visited.has(member.id)) {
            dfs(member);
        }
    });

    return { billedMembers, dependentChildren, nonDependentMembers };
}
