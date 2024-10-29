"""changes in user table

Revision ID: c8a7eff2bf11
Revises: 03784b1c253b
Create Date: 2024-10-29 15:53:39.632834

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = 'c8a7eff2bf11'
down_revision: Union[str, None] = '03784b1c253b'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('price',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('shop_name', sa.String(), nullable=True),
    sa.Column('date', sa.Date(), server_default=sa.text('CURRENT_DATE'), nullable=True),
    sa.Column('time', sa.Time(), server_default=sa.text('CURRENT_TIME'), nullable=True),
    sa.Column('flowname', sa.String(), nullable=False),
    sa.Column('main_description', sa.String(), nullable=True),
    sa.Column('rating', sa.Integer(), nullable=True),
    sa.Column('no_of_reviews', sa.Integer(), nullable=True),
    sa.Column('seller_type', sa.String(), nullable=True),
    sa.Column('availability', sa.Integer(), nullable=True),
    sa.Column('price', sa.Integer(), nullable=True),
    sa.Column('place', sa.String(), nullable=False),
    sa.Column('long_description', sa.String(), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('price')
    # ### end Alembic commands ###
