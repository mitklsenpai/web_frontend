import { useState, useEffect, useRef, useCallback } from "react";

const FEED_WIDTH = 640;
const FEED_HEIGHT = 360;
const DURATION_SECONDS = 10;

export function useGazeEstimate() {
    // status: 'stopping' | 'tracking' | 'pausing'
    const [status, setStatus] = useState("stopping");
    const [gazeCoords, setGazeCoords] = useState({ x: 523, y: 312 });
    const [confidence, setConfidence] = useState(94);
    const [fps, setFps] = useState(30);
    const [remainingTime, setRemainingTime] = useState(DURATION_SECONDS);

    const moveIntervalRef = useRef(null);
    const countdownTimerRef = useRef(null);

    // Randomize coordinates within the camera feed boundaries
    const randomizeCoordinates = useCallback(() => {
        const x = Math.floor(Math.random() * (FEED_WIDTH - 120)) + 60;
        const y = Math.floor(Math.random() * (FEED_HEIGHT - 100)) + 50;
        const conf = Math.floor(Math.random() * 6) + 92; // 92% - 97%
        const curFps = Math.floor(Math.random() * 3) + 29; // 29 - 31

        setGazeCoords({ x, y });
        setConfidence(conf);
        setFps(curFps);
    }, []);

    const clearTimers = useCallback(() => {
        if (moveIntervalRef.current) {
            clearInterval(moveIntervalRef.current);
            moveIntervalRef.current = null;
        }
        if (countdownTimerRef.current) {
            clearInterval(countdownTimerRef.current);
            countdownTimerRef.current = null;
        }
    }, []);

    // Stop tracking completely
    const handleStop = useCallback(() => {
        clearTimers();
        setStatus("stopping");
        setRemainingTime(DURATION_SECONDS);
        setFps(30);
    }, [clearTimers]);

    // Pause tracking without completely stopping
    const handlePause = useCallback(() => {
        if (status === "tracking") {
            clearTimers();
            setStatus("pausing");
        }
    }, [status, clearTimers]);

    // Start or resume tracking
    const handleStart = useCallback(() => {
        if (status === "tracking") return;

        // If restarting from stopping, reset initial coordinates and timer
        if (status === "stopping") {
            randomizeCoordinates();
            setRemainingTime(DURATION_SECONDS);
        }

        setStatus("tracking");
    }, [status, randomizeCoordinates]);

    // Effect to handle tracking timers and random movement
    useEffect(() => {
        if (status === "tracking") {
            // Random movement interval (every 800ms)
            moveIntervalRef.current = setInterval(() => {
                randomizeCoordinates();
            }, 800);

            // 1-second countdown timer for the 10s duration
            countdownTimerRef.current = setInterval(() => {
                setRemainingTime((prev) => {
                    if (prev <= 1) {
                        handleStop();
                        return DURATION_SECONDS;
                    }
                    return prev - 1;
                });
            }, 1000);
        } else {
            clearTimers();
        }

        return () => {
            clearTimers();
        };
    }, [status, randomizeCoordinates, handleStop, clearTimers]);

    return {
        status,
        gazeCoords,
        confidence,
        fps,
        remainingTime,
        feedWidth: FEED_WIDTH,
        feedHeight: FEED_HEIGHT,
        handleStart,
        handlePause,
        handleStop
    };
}
