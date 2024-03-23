// Test2.tsx
import React, { useEffect, useState } from 'react';
import { determineBillingMembers } from './determineBillingMembers';
import { ClubMember } from './types';
import data from './data/data1.json';

const Test2: React.FC = () => {
    const [billingInfo, setBillingInfo] = useState<{
        billedMembers: ClubMember[],
        dependentChildren: ClubMember[],
        nonDependentMembers: ClubMember[] // Add non-dependent members to the state
    }>({
        billedMembers: [],
        dependentChildren: [],
        nonDependentMembers: [] // Initialize the new state
    });

    useEffect(() => {
        const billingInfo = determineBillingMembers(data);
        setBillingInfo(billingInfo);
    }, []);

    return (
        <div>
            <h1>Billing Information (Test 2)</h1>
            <div>
                <h2>Billed Members:</h2>
                <ul>
                    {billingInfo.billedMembers.map(member => (
                        <li key={member.id}>{member.name}</li>
                    ))}
                </ul>
            </div>
            <div>
                <h2>Dependent Children:</h2>
                <ul>
                    {billingInfo.dependentChildren.map(member => (
                        <li key={member.id}>{member.name}</li>
                    ))}
                </ul>
            </div>
            <div>
                <h2>Non-Dependent Members:</h2> {/* Add a new section for non-dependent members */}
                <ul>
                    {billingInfo.nonDependentMembers.map(member => (
                        <li key={member.id}>{member.name}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Test2;
