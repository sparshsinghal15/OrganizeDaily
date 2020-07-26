import React from 'react';
import LocalScheduleComponent from './LocalSchedule';
import ActivitiesComponent from './Activities';
import { Row, Col } from 'reactstrap';

export default function ScheduleComponent() {
	return (
		<div>
			<div style={{ boxSizing: 'border-box', overflowX: 'hidden', textAlign: 'center' }} className="px-5">
				<Row className="justify-content-between">
					<Col style={{ padding: 0 }} lg="6">
						<LocalScheduleComponent />
					</Col>
					<Col style={{ padding: 0 }} lg="4">
						<ActivitiesComponent />
					</Col>
				</Row>
			</div>
		</div>
	);
}
