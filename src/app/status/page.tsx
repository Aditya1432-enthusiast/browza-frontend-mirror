"use client"

import React, { useEffect, useState } from 'react'
import { statusApi } from '../lib/api'

interface statusData {
    ok: boolean;
    ts: string;
}

const Status = () => {
    const [statusData, setstatusData] = useState<statusData | null>(null);

    useEffect(() => {
        const fetchStatus = async () => {
            const data = await statusApi();
            
            if (data) {
                setstatusData(data)
            }
        }
        
        fetchStatus();
    }, [])

    return (
        <div>
            {JSON.stringify(statusData)}
        </div>
    )
}

export default Status
